const express = require('express')
const router = express.Router()

router.get('/',(req,res)=>{
  console.log('main')
  res.sendFile(path.join(__dirname, 'react-project', 'build','index.html'))
})

router.post('/getData', (req, res)=>{
  console.log('getData Router', req.body)
  res.json({auth : 'user'})
})



module.exports = router;