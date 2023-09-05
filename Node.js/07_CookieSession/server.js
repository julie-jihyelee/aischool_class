const express = require('express');
const app = express();
const cookieRouter = require('./routes/cookie');
const sessionRouter = require('./routes/session');


// 쿠키 설정 - 쿠키를 확인할 수 있도록 해주는 모듈
const cookieParser = require('cookie-parser');

app.use(cookieParser());


// 세션 설정
const session = require('express-session'); // session의 기능
const filestore = require('session-file-store')(session) // session의 저장소
/* 쿠키는 저장소가 필요하지 않았는데 왜 세션만 필요할까요?

- 쿠키는 브라우저에 저장을 하기 때문에 별도로 저장소가 필요하지 않음
- 세션 고유 ID를 구분하기 위해서 별도로 서버 쪽에 저장소가 필요하다!!!
- DB에 저장하기도 함 (이번 수업에서는 별도의 저장소를 만들어 관리할 예정)

*/
app.use(session({
  httpOnly : true,           // http로 온 요청만 처리하겠다
  resave : false,            // 세션을 항상 재저장하지 않겠다 -> 변화가 없어도 계속 재정하면 효율이 안좋음
  secret : "secret",         // 암호화 하는 키 => 사용할 일이 없음
  store : new filestore()    //  세션을 어디에 저장할 거니? => 저장소
}))



app.use('/cookie', cookieRouter)
app.use('/session', sessionRouter)



app.set('port', process.env.PORT | 3333)



app.listen(app.get('port'), ()=>{
  console.log(app.get('port'),'port waiting...')
})