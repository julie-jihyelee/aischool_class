const express = require('express')
const router = express.Router()
const conn = require('../config/database');

router.post('/join', (req, res)=>{

  let {id, pw, name, email} = req.body.userData;

  // 회원 중복체크
  let sql1 = "SELECT ID FROM PROJECT_MEMBER WHERE ID = ?"
  conn.query(sql1, [id], (err, rows)=>{
    console.log('rows : ', rows)
    if (rows.length > 0){
      // 아이디 중복
      res.json({result:'dup'} )
    }else{
      //회원가입 가능 상태 
      let sql2 = 'INSERT INTO PROJECT_MEMBER VALUES(?, ?, ?, ?)'
      conn.query(sql2, [id, pw, name, email], (err, rows)=>{
        console.log('row2', rows)
        if(rows){
          res.json({result : 'success', id : id})
        } else {
          res.json({result : 'failed'})
        }
      })

    }
  })

})


router.post('/login', (req,res)=>{
  let {id, pw} = req.body.userInfo;
  console.log('check', id,pw)

  let sql = "SELECT * FROM PROJECT_MEMBER WHERE ID =? AND PW = ?"

  conn.query(sql, [id, pw], (err,rows)=>{
    console.log('rows', rows)
    if (rows.length > 0){
      res.json({result : 'success', id : id})
    }else{
      res.json({result : 'failed'})
    }
  })
})



module.exports = router;