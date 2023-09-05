const express  = require('express')
const app = express()
const bodyParser = require('body-parser')
const indexRouter = require('./routes')
const path = require('path')
const cors = require('cors')
const userRouter = require('./routes/user')

// cors 오류 해결을 위한 미들웨어
app.use(cors())
// json 파일 사용을 위한 미들웨어 
app.use(express.json())

app.use(express.static(path.join(__dirname, 'react-project', 'build')));
app.use('/', indexRouter)
app.use('/user', userRouter)

app.set('port', process.env.PORT || 3333);
app.listen(app.get('port'), ()=>{
  console.log('port waiting...');
})
