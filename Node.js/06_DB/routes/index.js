// 페이지 이동과 관련된 경로 처리 

const express = require('express')
const router = express.Router()
const conn = require('../config/database')

// main page로 이동
router.get('/',(req, res)=>{
  console.log('main Router')
  res.render('main', {nick:req.session.nick})
})

// join page로 이동
router.get('/join', (req,res)=>{
  console.log('Join Page')
  res.render('join') 
})

// login page로 이동
router.get('/login', (req,res)=>{
  console.log('Login Page')
  res.render('login')
})

// select page로 이동 (전체검색)
router.get('/select', (req,res)=>{
  console.log('select Page');

  // SQL문 작성
  let sql = "SELECT ID, NICK FROM MEMBER"
  // DB 연동
  conn.query(sql,(err, rows)=>{
    console.log('전체검색로직', rows)
    res.render('select', {list : rows})
  }) 
  
})


// select page로 이동 (특정회원검색)
router.get('/search', (req,res)=>{
  console.log('search Page')
  res.render('search')
})


// delete page로 이동
router.get('/delete', (req,res)=>{
  console.log('delete Page')
  res.render('delete')
})

// 로그아웃
router.get('/logout', (req,res)=>{
  console.log('로그아웃합니다')
  req.session.nick = '' ;
  res.render('main')
})



module.exports = router;