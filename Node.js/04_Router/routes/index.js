// 라우터 작업, 페이징하는 라우터들만!

const express = require('express')
const router = express.Router()

router.get('/',(req,res)=>{
  res.send(`
  <h1>Main Page</h1>
  <a href="/user">USER PAGE</a>
  <a href="/login">LOGIN PAGE</a>
  `)
})

// 로그인 페이징
router.get('/login', (req,res)=>{
  res.send(`
  <h1>Login Page</h1>
  <a href="/user/나예호">나예호 로그인</a>
  <a href="/user/임승환">임승환 로그인</a>
  <a href="/user/손동연">손동연 로그인</a>
  `)
})


module.exports = router ;