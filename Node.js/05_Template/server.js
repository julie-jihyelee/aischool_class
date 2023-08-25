const express = require('express')
const app = express()
const indexRouter = require('./routes')
const nunjucks = require('nunjucks')


/*
HTML은 정적인 언어이기 때문에 1000개의 데이터를 넣고 싶으면 1000번 코딩해서 넣어주어야한다
그런데 js문법을 이용한다면? 반복문을 돌리면 됨
==> HTML문서에서 JS문법을 사용할 수 있게 하자 !! => 템플릿 엔진


** 종류  : Nunjucks, EJS, PUG ... etc
   => 우리는 HTML과 가장 사용법이 유사한 Nunjucks를 사용할 것

** Nunjucks 사용 방법
   1) 설치 : npm i nunjucks chokidar
   2) require('nunjucks') 
   3) view 엔진을 나는 html확장자로 설정하겠다!
      => nunjucks의 확장자가 html임   
   4) nunjucks사용 
   

*/

app.set('view engine', 'html') //3번

// nunjucks.configure의 첫번째 인자 : views 폴더의 경로
// nunjucks.configure의 두번째 인자 : 구성 옵션이 담긴 객체 
//                                     -- express 속성 : express가 담겨있는 객체 연결
//                                     -- watch 속성 : true일 때, html파일이 변경되면 
//                                        템플릿 엔진을 다시 렌더링 => 변화를 감지 
nunjucks.configure('views', {
  express : app, 
  watch : true 
}) //4번

app.use('/', indexRouter)
app.set('port', process.env.PORT || 3333)

app.listen(app.get('port'))