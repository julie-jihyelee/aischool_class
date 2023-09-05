import React, { useRef, useState, useEffect} from 'react'
import {Form, Button} from 'react-bootstrap'
import axios from '../axios';

const Join = () => {

  const idRef = useRef();
  const pwRef = useRef();
  const nameRef = useRef();
  const emailRef = useRef();

  const [ userData, setUserData ] = useState({});

  const handleJoin = (e) =>{
    e.preventDefault();
    setUserData({
      id : idRef.current.value, 
      pw : pwRef.current.value,
      name : nameRef.current.value,
      email : emailRef.current.value
    })
  
  }

  useEffect(()=>{
    userData.id !== undefined &&
        
    axios
    .post('/user/join', {userData : userData})
    .then(res => {
      console.log(res.data.result)
      if (res.data.result === 'success'){
        sessionStorage.setItem('userID', userData.id) 
        window.location.href="/"
      } else {
        alert ('다시 한 번 확인해주세요')
        window.location.href="/join"
      }
      
    
    })

    
  },[userData])

  /*
  1. axios를 이용해서 server에 연동
     - post 방식을 이용
     - http://localhost:3333/user/join (짧게 줄이는 거 가능)
     - userData 객체 보내줄거임

  2. server단 (routes-> user.js)
     - join 라우터에서 DB 연동 작업 진행
     - insert 회원가입 (필수) 
     - ID 중복체크 진행 (선택)

  3. 만약, 회원가입에 성공했다면?
     - result : success, id : 사용자 id 
     만약, 실패했다면?
     - result : failed
     (선택) 아이디가 중복이라면?
     - id : dup

  4. console창에 결과값 확인 후 ,
     - 성공 시 -> main, session 저장 => browser에 저장 (sessionStorage)
     - 실패 혹은 중복 -> alert 실패 알림 => join창으로 이동

  */


 
  return (
    <div>
      <h1>회원가입</h1>
      <br/>
      <Form onSubmit={handleJoin}> 
        <Form.Group className="mb-3" controlId="formBasicID">
          <Form.Label>ID</Form.Label>
          <Form.Control type="id" placeholder="Enter ID" ref={idRef}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" ref={pwRef} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicID">
          <Form.Label>이름</Form.Label>
          <Form.Control type="text" placeholder="Enter Name" ref={nameRef}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>이메일 주소</Form.Label>
          <Form.Control type="email" placeholder="Enter Email Address" ref={emailRef} />
        </Form.Group>

        <br/>
        <Button variant="primary" type="submit">
          가입하기
        </Button>
      </Form>
    </div>
  )
}

export default Join