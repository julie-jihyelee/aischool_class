import React from 'react'
import {Link} from 'react-router-dom'

const MainPage = () => {
  /*
  ** Link 태그
  - 하이퍼 텍스트를 생성할 때, 보통 a태그를 사용함
  - 하지만 a태그는 클릭 시 새로운 페이지로 이동하므로
    Single Page Application인 React와 맞지 않는다.

  - Link 태그를 사용하여 => history API를 통해 브라우저 주소의 경로만 바꿔준다

  1) import { Link } from 'react-router-dom'
  2) <Link to='/경로'> 텍스트 </Link>   

  */



  return (
    <div>
      MainPage
      <hr/>
      <Link to='/about'>AboutPage</Link>
      {" "}
      <Link to='/login'>LoginPage</Link>
      {" "}
      <Link to='http://www.naver.com'>네이버로 이동</Link>

    </div>
  )
}

export default MainPage