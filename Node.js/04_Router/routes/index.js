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




module.exports = router ;