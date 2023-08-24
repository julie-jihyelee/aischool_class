const http = require('http')
const fs = require('fs').promises;

// 서버의 기본 구조
http.createServer(async(req,res)=>{
  console.log('누군가가 서버에 접근했습니다.')

  const htmlFile = await fs.readFile('./ex04.html')

  res.write(htmlFile)
  res.end()
})  // 서버 생성 및 콜백함수
.listen(3333,()=>{
  console.log('3333번 포트에서 대기 중...');
}) // 포트번호, 이벤트 함수 