import React from 'react'
import { useNavigate } from 'react-router-dom'

const AboutPage = () => {


  const nav = useNavigate()
  //회원정보 
  let auth = false;


  const goToMain = () => {
    console.log('go To Main Function')
    nav('/')
    auth ? nav('/'):nav('/login')
  }



  /*
    실습)
    ------
    만약 우리 유저라면 메인페이지로 이동
    우리 유저가 아니라면 로그인 페이지로 이동
    ------

    useNavigate
    - 페이지 이동을 도와주는 리액트 훅

    1) import {useNavigate} from 'react-router-dom'
    2) const 변수 = useNavigate()
    3) 페이지 이동을 해야할 때, 변수('경로')
    ex) const nav = useNavigate()
        nav('/login')


    실습2 ] 

    1. pages 안에 여러 컴포넌트들을 새로 만들기
    - NotFound.jsx
    - Board.jsx
    - Detail.jsx

    2. 경로를 지정
    - /notfound => NotFound.jsx
    - /board => Board.jsx
    - /detail => Detail.jsx

    3. Main, Login, About, NotFound, Board, Detail => 상단바로 생성 
    단, 어느 페이지를 가든 상단바가 존재해야 함








  */



  return (
    <div>
      AboutPage
      <hr />
      <button onClick={goToMain}>메인페이지(유저만 확인이 가능)</button>



    </div>
  )
}

export default AboutPage