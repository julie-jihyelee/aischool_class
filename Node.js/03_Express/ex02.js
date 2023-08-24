// Server Setting
// express 설정
const express = require('express')
const app = express()
const indexRouter = require('./routes/index')

// 클라이언트의 post request data를 추출하는 모듈
const bodyParser = require('body-parser')

// bodyParser 미들웨어
app.use(bodyParser.urlencoded({extended : true}))

// express 사용
app.set('port', process.env.PORT || 3333) // 포트번호 세팅
app.use(express.static(__dirname+'/public')) // 정적인 페이지 세팅

// router의 미들웨어 
app.use('/', indexRouter)

app.listen(app.get('port')) // 대기