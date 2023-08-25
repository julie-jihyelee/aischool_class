// 라우터 작업, 페이징하는 라우터들만!
const express = require('express')
const router = express.Router()

router.get('/',(req,res)=>{
  res.send(`
  <h1>USER PAGE</h1>
  `)
})



/* 라우트 매개변수
  - 문자 그대로 /:name을 의마하는 게 아니라
  : 뒤에 있는 매개변수 안에는 내가 작성한 파라미터 값이 들어감
  
  ex) localhost:3333/syp
  /:name
  => name안에 syp라는 값이 들어가게 됨
  - 해당 객체는 req.parms안에 존재
  
  ★매개변수가 없는 일반 라우터보다, 매개변수가 있는 라우터를 뒤쪽에 작성해야 
  일반 라우터를 방해하지 않는다.★
  
  
  
  */



router.get('/:name', (req,res)=>{
  console.log('라우트매개변수 사용', req.params)
  res.send(`
  <h1>${req.params.name}님의 페이지입니다.</h1>`)

})

module.exports = router ;