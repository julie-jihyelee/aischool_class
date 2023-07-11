import React from 'react'
import { useRef } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {

  // useRef => DOM 요소에 접근할 때 사용하는 리액트 훅
  // 음... document.getElementBy~ 쓰고 싶다.

  // 1) import {useRef} from 'react' 
  // 2) ref 선언! (내가 사용하고 싶은 요소) : 일반 변수랑 구분하기 위해 보통 -Ref를 붙임
  const idRef = useRef()
  const pwRef = useRef()
  // 3) 요소와 연결
  // <Form.Control type="text" placeholder="ID" ref={idRef}/>

  // const nav = useNavigate()

  const handleLogin = (e) => {
    /* a, submit같은 몇몇 태그들은 값을 넘기는 기능을 고유하게 가지고 있음
     JS에서는 다른 페이지로 값을 넘기지 않게 하기 위해서 이벤트를 발생하지 않도록 막을 수 있다.
    */
    e.preventDefault();
    console.log('handleLogin Function')
    console.log('idRef', idRef.current.value, 'pwRef', pwRef.current.value)

    if (idRef.current.value === 'admin' && pwRef.current.value === '1234') {
      
      /* session Storage 
       브라우저에 데이터를 저장할 수 있는 장소 (storage)
       페이지를 새로고침해도 데이터가 사라지지 않고 남아있다.
       ex) 로그인

       1) 추가(저장) : sessionStorage.setItem()
       2) 가져오기 :sessionStorage.getItem()
       3) 삭제하기 : sessionStorage.removeItem()
       4) 전체 공간 비우기 : sessionStorage.clear()
       

      */

      /* local Storage
        브라우저를 닫았다가 다시 열었을 때도 지속된다.
        탭을 여러 개 열어도 공유된다. 
        내가 직접 지우기 전에는 지속됨
        * 문법은 sessionStorage와 동일함 
        ex) 장바구니, 7일 동안 보지 않기 등         
      */




      //1-1 ) session에 데이터 저장하기
      sessionStorage.setItem('userId', idRef.current.value)
      // F12-> Application -> Storage -> Session Storage에서 확인 가능!
      alert(`${idRef.current.value}님 환영합니다!`)
      window.location.replace('/')
    } else {
      alert('잘못된 아이디 혹은 비밀번호입니다.')
      // 초기화
      idRef.current.value = ''
      pwRef.current.value = ''
      idRef.current.focus()

    }
  }

  return (
    <div id='input'>
      <Form onSubmit={handleLogin}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>ID</Form.Label>
          <Form.Control type="text" placeholder="ID" ref={idRef} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" ref={pwRef} />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>

    </div>
  )
}




export default Login