// Get 방식

const http = require('http')
const userUrl = require('url')

http.createServer((req,res)=>{
  console.log('success Server',req.url)
  // 실행내용기입
  res.end()
})
.listen(3333,()=>{
  console.log('3333 port waiting')
})



// Post 방식