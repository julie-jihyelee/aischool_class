console.log('3.createServer')

// 현재 파일을 서버로 만들어주는 모듈 http모듈이 필요함
// 1. 서버를 생성해주는 메소드 : createServer(콜백함수)
// 2. 연결 요청을 대기하는 메소드 : listen(port번호, 콜백함수) : 항상 맨 아래 위치해야 함 (계속 대기중이라 윗 부분이 우선 실행되도록)

// 내 ip주소 : 192/168.70.245

const http = require('http') //node 자체에 설치되어 있는 내부 모듈
const ip = require('ip') // 별도의 설치가 필요한 외부 모듈
const requestIp = require('request-ip')

http.createServer((req, res)=>{
  const ip_c = ip.address()
  const ip_req = requestIp.getClientIp(req).substring(7) // 7번째 이후 글자만 사용할거야~
  console.log('서버에 누군가가 접근했습니다', ip_req)

  res.writeHead(200,{'Content-Type': 'text/html; charset=utf-8'}) //인코딩
  res.write('<h1>반가워요~</h1>')
  
  if(ip_req == '192.168.70.225'){
    res.write('<p>팀장님 반갑습니다</p>')
  } else if(ip_req == '192.168.70.46' ) {
    res.write('<h1>영표쌤 환영합니다!</h1>')
  } else {
    res.write('처음뵙겠습니다')
  }
  
  res.end()
})
.listen(3333, ()=>{
  console.log('3333번 포트에서 서버 연결 대기 중...')
})

//request : client
//response : server

