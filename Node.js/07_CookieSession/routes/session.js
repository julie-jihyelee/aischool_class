const express = require('express');
const router = express.Router()



/* 세션 (session) 
   - Server가 Client에게 암호화된 아이디 (Session ID)를 부여함
   - 쿠키랑 다른 점이 있다면?
     > 세션은 서버의 자원을 쓰는 것, 너무 많은 세션을 낭비하지 않는 것이 좋다
     > 브라우저가 종료되면 세션은 자동으로 삭제 
   - 로그인 기능 (메인에서 로그인을 하면 블로그에서는 따로 로그인을 하지 않아도 된다)   

  1) 설치
   - 세션 기능 : express-session
   - 세션 저장소 : session-file-store

   2) require
   3) 세션 미들웨어 세팅 (httpOnly, resave, secret, store ... )

*/

router.get('/', (req, res)=>{
  res.send(`<a href="/session/set">세션 저장</a>
            <a href="/session/get">세션 확인</a>
            <a href="/session/delete">세션 삭제</a>`
          );
})

// 1) 세션 생성하기 
router.get('/set', (req, res)=>{
  console.log('session Router')
  req.session.name = '이지혜';
  req.session.save(()=>{
    res.redirect('/session');
  })
  
})

// 2) 세션 값 확인하기 
router.get('/get', (req, res)=>{
  res.send('user : ', req.session.name);
})



// 3) 세션 삭제하기 
router.get('/delete', (req, res)=>{
  // 3-1) 세션 단일 삭제
  // req.session.name = "";
  // req.session.save(()=>{
  //   req.redirect('/session')
  // })
  // 3-2) 전체 삭제 
  req.session.destroy()

})




router.get('/set', (req, res)=>{
  console.log('sessionRouter')
})


module.exports = router ;