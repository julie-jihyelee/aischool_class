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
      console.log('로그인 성공')
      res.send(`<script>alert('환영합니다.');location.href="/"</script>`)
    }else{
      res.send(`<script>alert('아이디 혹은 비밀번호를 잘못입력하셨습니다.');location.href="/login"</script>`)
      console.log('로그인 실패')
    }
  })

})




module.exports = router;