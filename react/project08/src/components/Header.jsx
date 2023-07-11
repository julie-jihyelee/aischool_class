import React from 'react'
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';


const Header = () => {

  const [aut, setAut] = useState('Login')
  const [state, setState] = useState('')
  let sessionData = sessionStorage.getItem('userId')


  useEffect(() => {
    if (sessionData != null) {
      //로그인이 되어있는 상태
      setAut('Logout')
      setState(`${sessionData}님, 환영합니다.`)

    } else {
      //로그인이 되어있지 않은 상태 `1
      setAut('Login')
      setState('로그인이 필요합니다.')
    }
  },[])

  const nav = useNavigate()
  const handleLogout = () => {
    console.log('login/logout Function', sessionStorage.getItem('userId'))

    if (sessionData != null) {
      //로그인이 되어있는 상태

      //1. 세션을 삭제
      //1-1. 하나만 삭제
      sessionStorage.removeItem('userId')

      //1-2. 세션 자체를 비워주는 것 : sessionStorage.clear()

      //2. 메인으로 이동
      window.location.replace('/') // 페이지를 새로고침하면서 이동!

    } else {
      //로그인이 되어있지 않은 상태 
      nav('/login')
    }





  }




  return (
    <div className='header'>
      <div id='title'>
        <h1>Today News</h1>
        <p>{state}</p>
      </div>
      <br />

      {/* 만약 로그인상태? 로그아웃버튼 / 로그아웃상태? 로그인 버튼 */}
      <ButtonGroup aria-label="Basic example">
        <Link to='/main'><Button className='btn' variant="primary">Main</Button></Link>{' '}
        <Link to='/talk'><Button className='btn' variant="primary">Talk</Button></Link>{' '}
        <Link to='/login'><Button className='btn' variant="primary" onClick={handleLogout}>{aut}</Button></Link>
   
      </ButtonGroup>


    </div>
  )
}

export default Header