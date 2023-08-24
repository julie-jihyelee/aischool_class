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

  id=='admin' && pw =='1234' ? 
  // res.sendFile(__dirname+'../public/ex02success.html')
  res.sendFile(path.join(__dirname, '..', '/public/ex02success.html')): 
  // res.sendFile(__dirname+'../public/ex02failed.html')
  res.sendFile(path.join(__dirname, '..', '/public/ex02failed.html'))
})


module.exports = router;