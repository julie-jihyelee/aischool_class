const http = require('http')
const userUrl = require('url')

http.createServer((req,res)=>{
  console.log('success Server',req.url)
  
  // url값 가져오기 
  let query = userUrl.parse(req.url, true).query
  console.log(query)

  // 사용자 입력 값 변수로 저장하기
  let num = query.number;
  console.log(num)

  // 한글 작성을 위해 head설정
  res.writeHead(200, {"Content-Type": 'text/html; charset=utf-8'})

  // 반복문 작성
  let result ='';
  for(let i = 1; i <= 9 ; i++){
    result += `<tr><td style='border : 1px solid gray'> ${num} * ${i} = ${num*i}</td></tr>`
  }

  // 표 그리기
  res.write(`<table style='border : 1px solid gray'>${result}</table>`)
 
  // 서버 응답 종료
  res.end()
})
.listen(3333,()=>{
  console.log('3333 port waiting')
})