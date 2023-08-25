/* Router 작업 */
const express = require('express')
const router = express.Router()
const path = require('path')





router.get('/', (req, res)=>{
  console.log('서버접근')
  res.sendFile(path.join(__dirname, '..', '/public/ex02login.html'))
}) 

router.get('/getLogin', (req, res)=>{
  console.log('express-get', req.query)
})

router.post('/postLogin', (req, res)=>{
  console.log('express-post', req.body)
  const {id, pw} = req.body;
  // 로그인 성공시? 로그인 성공! id님 환영합니다 : 로그인 실패! 회원가입 진행해주세요
  console.log('check', id, pw)
  // case2 ) 동적인 파일
  res.render('loginResult', {id : id , pw : pw})

//  case 1) 정적인 파일
//   id=='admin' && pw =='1234' ? 
//   // res.sendFile(__dirname+'../public/ex02success.html')
//   res.sendFile(path.join(__dirname, '..', '/public/ex02success.html')): 
//   // res.sendFile(__dirname+'../public/ex02failed.html')
//   res.sendFile(path.join(__dirname, '..', '/public/ex02failed.html'))
 })


module.exports = router;