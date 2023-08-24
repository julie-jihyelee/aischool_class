const http = require('http')
const infoUrl = require('url')

http.createServer((req,res)=>{

  console.log('서버에 누군가가 접근했습니다.', req.url)
  const result = infoUrl.parse(req.url,true).query
  console.log(result)
 

  let number1 = parseInt(result.num1)
  let number2 = parseInd(result.num2)
  let final = '';

  if (result.operator=='+'){
    final = num1+num2
  }else if(result.operator=='-'){
    final = num1-num2
  }else if(result.operator=='*'){
    final = num1*number2
  }else if(result.opertaor=='/'){
    final = num1 /num2
  }

  res.writeHead(200, {"Content-Type": 'text/html; charset=utf-8'})

  // if(result.operator=='+'){
  //   res.write(`${Number(result.num1)} + ${Number(result.num2)} = ${Number(result.num1)+Number(result.num2)}`)
  // }else if(result.operator=='-'){
  //   res.write(`${Number(result.num1)} - ${Number(result.num2)} = ${Number(result.num1)-Number(result.num2)}`)
  // }else if(result.operator=='*'){
  //   res.write(`${Number(result.num1)} * ${Number(result.num2)} = ${Number(result.num1)*Number(result.num2)}`)
  // }else if(result.operator=='/'){
  //   res.write(`${Number(result.num1)} / ${Number(result.num2)} = ${Number(result.num1)/Number(result.num2)}`)
  // }
  res.end(`첫번째 숫자는 ${num1} <br/> 두번째 숫자는 ${num2} <br/> 연산결과는 ${final} 입니다. `)
})
.listen(3333)