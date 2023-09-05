/* 회원 관리 기능을 위한 경로
   - 로그인 기능
   - 회원가입 기능
*/ 
const express = require('express')
const router = express.Router()
const conn = require('../config/database')



// 회원가입 기능
router.post('/handleJoin', (req, res)=>{
  console.log('handle join router');
  let {id, pw, nick} = req.body;

  // 1) 내가 사용할 sql 구문 작성
  let sql = "INSERT INTO MEMBER VALUES (?,?,?)" 

  // 2) DB 연동 : conn.query(sql구문, (선택) sql구문 안 가변데이터, 연동 이후 콜백함수)
  conn.query(sql,[id, pw, nick],(err, rows)=>{
    console.log('회원가입로직', rows)
    
    if(rows) {
      console.log('회원가입 성공')
      res.redirect('/')
    }else{
      console.log('회원가입 실패', err)
      res.send(`<script>alert('회원가입 실패!');location.href="http://localhost:3333/join"</script>`)
    }
  })
})

//로그인 기능
router.post('/handleLogin', (req,res)=>{
  let {id,pw} = req.body;
  console.log('req:',id, pw);

  //1) sql문 작성
  let sql = "SELECT * FROM MEMBER WHERE ID=? and PW=?"

  // 2) DB 연동 -> rows 값을 console에 출력해보기
  conn.query(sql, [id, pw], (err, rows)=>{
    console.log('로그인로직', rows)

    if(rows.length > 0){
      console.log('로그인 성공', rows[0].NICK)
      req.session.nick = rows[0].NICK;
      req.session.save(()=>{
        res.send(`<script>alert('${rows[0].NICK}님 환영합니다.');location.href='/'</script>`)
      })
      
    }else{
      res.send(`<script>alert('아이디 혹은 비밀번호를 잘못입력하셨습니다.');location.href="/login"</script>`)
      console.log('로그인 실패')
    }
  })

})

// 로그아웃 기능
router.get('/logout', (req,res)=>{
  console.log('logout');
  req.session.nick='';
  req.session.save(()=>{
    res.send(`<script>location.href='/'</script>`)
  })
})



// 특정회원 검색 기능
router.get('/selectOne', (req,res)=>{
  console.log(req.query)

  // 1) 사용자가 보내온 데이터의 아이디를 id 변수 안에 할당
  let id = req.query.id ;
  
  // 2) DB연동 작업 : 
  // 2-1) SQL문 작성
  let sql = "SELECT ID, NICK FROM MEMBER WHERE ID = ?"
  //2-2) 내가 작성한 SQL문을 기반으로 DB연동
  conn.query(sql, [id], (err, rows)=>{
    console.log('받은 데이터 확인',rows)
  //2-3) 만약 데이터가 존재한다면, 'select.html'을 렌더링 => 자료가 담긴 배열 전송 
    if(rows.length > 0){
      res.render('select', {list :rows})
    }else{
      res.render('select')
      //res.send(`<script>alert('회원이 존재하지 않습니다');location.href="/search"</script>`)
    }
  })
})


// 회원 탈퇴 기능
router.post('/delete', (req,res)=>{
  
  let {id, pw} = req.body;
  console.log('사용자 정보 확인', id, pw)
  let sql = "DELETE FROM MEMBER WHERE ID=? AND PW=?"

  conn.query(sql, [id, pw], (err,rows)=>{
    console.log('data check:', rows)

    if (rows.affectedRows > 0) {
      console.log('삭제완료')
      req.session.nick='';
      req.session.save(()=>{
        res.send(`<script>alert('다음에 또 만나요!');location.href="/"</script>`)
      })
    }else {
      console.log('삭제 실패')
      res.send(`<script>alert('아이디 혹은 비밀번호를 잘못 입력하셨습니다!');location.href="/delete"</script>`)
    }

  })

})







module.exports = router;