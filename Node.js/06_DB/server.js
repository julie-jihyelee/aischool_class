const express = require('express');
const nunjucks = require('nunjucks');
const bodyParser = require('body-parser');
const app = express()
const indexRouter = require('./routes')
const userRouter = require('./routes/user')
const session = require('express-session')
const fileStore = require('session-file-store')(session)

app.use(session({
  httpOnly : true,
  resave : false,
  secret : 'secret',
  saveUninitialized: true,
  store : new fileStore()
}))



app.set('port', process.env.PORT || 3333);
app.set('view engine', 'html')

app.use(bodyParser.urlencoded({extended : true}))
nunjucks.configure('views', {
  express : app,
  watch : true
})




// 멀티 라우터 
// 페이지 이동 관련 router
app.use('/', indexRouter)

// 회원 관리 기능 관련 router
app.use('/user', userRouter)




app.listen(app.get('port'),()=>{
  console.log('port 대기중 ')
});