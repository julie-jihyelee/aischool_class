// 라우터 작업, 페이징하는 라우터들만!

const express = require('express')
const router = express.Router()

router.get('/',(req,res)=>{
  res.send(`
  <h1>Login Page</h1>
  `)
})




module.exports = router ;