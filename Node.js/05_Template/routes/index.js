const express = require('express')
const router = express.Router()

router.get('/',(req, res)=>{
  console.log('main page');
  
  // template engine을 쓰려면 응답.render('파일명')
  // ** 이때 주의사항!!! 파일은 반드시 views 폴더 안에 있어야한다!!!!
  
  res.render('main',{name : '나예호'})
})

router.get('/mypage', (req,res)=>{
  res.render('mypage')
})

module.exports = router;