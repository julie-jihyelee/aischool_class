import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import LoginPage from './pages/LoginPage';
import AboutPage from './pages/AboutPage';
import Board from './pages/Board';
import Detail from './pages/Detail';
import NotFound from './pages/NotFound';
import { Link } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import { Button, ButtonGroup } from 'react-bootstrap';

function App() {

  const nav = useNavigate()
  const linkStyle={
    textDecoration: 'none'
  }

  /*
  라우팅 기능을 사용해보자!
  - 라우팅 (Routing) : 사용자가 요청한 url에 따라 그에 적합한 페이지를 보여주는 작업
    ex) 사용자 '메인페이지 보여줘!' -> Main Page 제공
        사용자 '로그인 페이지 보여줘!' -> Login Page 제공
        ===> 이러한 과정을 Routing이라고 한다. 


  - 리액트는 Single Page Application, 여러 개의 페이지를 사용하는 라이브러리가 아님
  - 신규 페이지를 불러오는 것이 아니라 하나의 페이지에서 내가 필요한 데이터만 가져와서 교체!
  
  우리는 'React-Router-Dom'사용
  1) 설치 : npm react-router-dom
  2) BrowserRouter import
  - 사용자가 입력한 주소를 감지하는 역할
  - 내가 사용할 Component를 감싸주는 역할
  
  3) Routes - Route
    3-1) Routes : 여러 경로(Route)를 감싸서, 
                  하위 경로 중 조건에 맞는 경로 하나만 렌더링해주는 역할
                  ex) 
                  클라이언트 ‘나 A 페이지 줘!’
                  Routes : ‘ㅇㅋ A 페이지 여기 있어(Route)’
                  클라이언트 ‘나 B 페이지 줘!’
                  Routes : ‘ㅇㅋ B 페이지 여기 있어(Route)’
                과거에는 Switch라는 문법의 이름으로 사용이 되었음
                리액트가 업데이트 되어서 이름이 Routes로 변경된 것

    3-2) Route : 경로
    - 필수 속성 : Path(경로), Element (컴포넌트)
    - path(경로) : 사용자가 이렇게 요청을 했을 때
    - element(컴포넌트) : 이 컴포넌트를 보여주세요!
  
  */
  return (
    <div className="App">
      <br/>
      <h1 className='title'> Welcome to React Router!</h1>

      {/* 상단바 생성 */}
      <div>
        <ButtonGroup aria-label="Basic example">
          <Button variant="outline-success" onClick={() => { nav('/') }}>Main</Button>
          <Button variant="outline-success" onClick={() => { nav('/login') }}>Login</Button>
          <Button variant="outline-success" onClick={() => { nav('/about') }}>About</Button>
          <Button variant="outline-success" onClick={() => { nav('/board') }}>Board</Button>
          <Button variant="outline-success" onClick={() => { nav('/detail') }}>Detail</Button>
        </ButtonGroup>
      </div>
      <br/>     
      {/* <p>링크를 사용한 네비바 만들기 - 숙제</p>
      <div id="NaviBar">
        <hr />
        <table>
          <tr>
            <td><Link to='/' style={linkStyle}>Main</Link></td>
            <td><Link to='/about' style={linkStyle}>About</Link></td>
            <td><Link to='/login' style={linkStyle}>Login</Link></td>
            <td><Link to='/board' style={linkStyle}>Board</Link></td>
            <td><Link to='/detail' style={linkStyle}>Detail</Link></td>
            <td><Link to='/notfound' style={linkStyle}>NotFound</Link></td>
          </tr>
        </table>
      </div> */}
      <hr />


      {/* Routes가 하는 역할 : 필요한 페이지 가져다주는 친구 */}
      <Routes>
        <Route path='/' element={<MainPage />}></Route>
        <Route path='/about' element={<AboutPage />}></Route>
        <Route path='/login' element={<LoginPage />}></Route>
        <Route path='/board' element={<Board />}></Route>
        <Route path='/detail/:num' element={<Detail />}></Route>
        {/* notFound 페이지는 우리가 설정해둔 path이외의 모든 페이지에서 떠야 한다. */}
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
      

      <footer>
        <hr/>
        <p><b>이 모든 것은 선영표 선생님이 가르쳐준 리액트로 만들었습니다</b></p>
        <br/>
        <p>주소 : 광주광역시 동구 제봉로 92 (대성학원 1-3층)</p>
        <p>담당자 : 이지혜 (010-8624-0113)</p>
        <br/>
      </footer>
    </div>
    
  );
}

export default App;
