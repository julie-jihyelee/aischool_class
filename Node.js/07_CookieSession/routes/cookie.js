const express = require('express');
const router = express.Router()



/* Cookie : 클라이언트 웹 브라우저에 저장되는 정보
 - 쿠키는 서버의 자원을 전혀 사용하지 않고 클라이언트의 자원이다
 - 놀이공원에서 자유이용권은 늘 손님이 가지고 다니는 것과 같은 이치
 - 쿠키는 사용자가 브라우저를 종료하더라도 그 기록이 남아 있다.
 - 장바구니, 자동 로그인, ...
 
 [사용방법]
 1) 설치 : npm i cookie-parser
 2) require('cookie-parser')

 */

router.get('/', (req, res)=>{
  res.send(`<a href="/cookie/set">쿠키 저장</a>
            <a href="/cookie/get">쿠키 확인</a>
            <a href="/cookie/delete">쿠키 삭제</a>`);
})

// 1) 쿠키 저장하기 
router.get('/set', (req, res)=>{
  console.log('cookieRouter')
  res.cookie('nickname', '춘식이')
  res.redirect('/cookie')
})

// 2) 쿠키 가져오기
router.get('/get', (req, res)=>{

  let cNick = req.cookies.nickname ;
  console.log('닉네임은', cNick)
  res.redirect('/cookie')

})


// 3) 쿠키 삭제하기
router.get('/delete', (req, res)=>{

  res.clearCookie('nickname')
  res.redirect('/cookie')

})





module.exports = router ;