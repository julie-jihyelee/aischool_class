const http = require('http')
const qs = require('querystring')


http.createServer((req, res)=>{
  console.log('success Server')

  let body = ''

  req.on('data',(data)=>{
    body += data;
    console.log('data확인: ',body)
  })

  req.on('end', ()=>{
    let post = qs.parse(body)
    console.log('post data확인',post)
    res.writeHead(200, {"Content-Type": 'text/html; charset=utf-8'})
    res.end(`안녕하세요 저는 ${post.name}구요<br/> 
    제 취미는 ${post.hobby} 입니다. <br/> 
    저의 mbti는 ${post.mbti}입니다.<br/>
    제가 하고 싶은 말은 ${post.talk}입니다.`)
  })

  
})
.listen(3333,()=>{
  console.log('3333 port waiting')
})