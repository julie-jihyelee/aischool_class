import React, { useState, useRef, useEffect } from 'react'
import {Form, Button} from 'react-bootstrap'
import axios from '../axios'

const Login = () => {


  const idRef = useRef();
  const pwRef = useRef();

  const [userInfo,setUserInfo] = useState({});

  const handleLogin = (e) =>{
    e.preventDefault();
    setUserInfo({
      id : idRef.current.value,
      pw : pwRef.current.value
    })
  }


  useEffect(()=>{
    console.log('login', userInfo);

    userInfo.id !== undefined &&

    axios
     .post('/user/login', {userInfo : userInfo})
     .then(res =>{
       console.log('결과확인', res.data.id)

       if(res.data.result === 'failed'){
        alert('아이디 혹은 비밀번호가 일치하지 않습니다')
        window.location.href='/login'
       } else {
        sessionStorage.setItem({'userID' : res.data.id})
        window.location.href='/'
       }
     })

  },[userInfo])



  return (
    <div>
      <h1>로그인</h1>
      <br/>
      <Form onSubmit={handleLogin}>
        <Form.Group className="mb-3" controlId="formBasicID">
          <Form.Label>ID</Form.Label>
          <Form.Control type="id" placeholder="Enter ID" ref={idRef}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" ref={pwRef}/>
        </Form.Group>
        <br/>
        <Button variant="primary" type="submit">
          로그인
        </Button>
      </Form>
  </div>
  )
}

export default Login