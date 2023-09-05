import React from 'react'
import { Card, Nav, Button } from 'react-bootstrap'
import { Routes, Route, Link }from 'react-router-dom'
import MainContent from './MainContent'
import Join from './Join'
import MemberList from './MemberList'
import Delete from './Delete'
import Login from './Login'

const Main = () => {

  const logout = () => {
    sessionStorage.removeItem('userID')
    window.location.href='/'
  }


  const userState = () => {
    if(sessionStorage.getItem('userID')==='ADMIN'){
      return  
    }
  }
   


    return (
        <div>
            <Card>
                <Card.Header>
                    <Nav variant="tabs" >
                      {userState}
                      <Link to="/">
                          <Button variant='light'>Home</Button>
                      </Link> 
                      <Link to="/join">
                          <Button variant='light'>회원가입</Button>
                      </Link>                     
                      <Link to="/login">
                          <Button variant='light'>로그인</Button>
                      </Link>                     
                      <Link to="/">
                          <Button variant='light' onClick={logout}>로그아웃</Button>
                      </Link>                     
                      <Link to="/list">
                          <Button variant='light'>회원검색</Button>
                      </Link>                     
                      <Link to="/delete">
                          <Button variant='light'>회원탈퇴</Button>
                      </Link>      
                    </Nav>
                </Card.Header>
                <Card.Body>
                    <Routes>
                      <Route path='/' element={<MainContent />}></Route>
                      <Route path='/join' element={<Join />}></Route>
                      <Route path='/login' element={<Login />}></Route>
                      <Route path='/list' element={<MemberList />}></Route>
                      <Route path='/delete' element={<Delete />}></Route>
                    </Routes>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Main