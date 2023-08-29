// 내가 연결할 DB에 대한 정보 작성

/*
  1) npm i mysql2
  2) require()
*/

const mysql = require('mysql2')

// 3) 나의 DB 정보를 기재 
// 무조건 이렇게 적는 게 아니라 DB 상태에 맞게 입력
const conn = mysql.createConnection({
  'host' : 'localhost',      // localhost => 경로 입력
  'user' : 'root',           // workbench에서 확인가능
  'password' : '1234',
  'port' : 3306,
  'database' : 'nodejs'
})

conn.connect()

module.exports = conn ;
// 내 mysql정보를 가지고 연결한 conn을 모듈화해서
// 다른 파일에서도 사용하겠다