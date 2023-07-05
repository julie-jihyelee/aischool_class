import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import LoginPage from './pages/LoginPage';
import AboutPage from './pages/AboutPage';
import Board from './pages/Board';
import Detail from './pages/Detail';
import NotFound from './pages/NotFound';
import { Link } from 'react-router-dom';


function App() {



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
      <BrowserRouter>
        <h1> Welcome to React Router!</h1>
        <div id="NaviBar">
          <tr>
            <td><Link to='/'  style={{textDecoration : 'none'}}>Main</Link></td>
            <td><Link to='/about' style={{textDecoration : 'none'}}>About</Link></td>
            <td><Link to='/login' style={{textDecoration : 'none'}}>Login</Link></td>
            <td><Link to='/board' style={{textDecoration : 'none'}}>Board</Link></td>
            <td><Link to='/detail' style={{textDecoration : 'none'}}>Detail</Link></td>
            <td><Link to='/notfound' style={{textDecoration : 'none'}}>NotFound</Link></td>
          </tr>
        </div>
        <hr />


        {/* Routes가 하는 역할 : 필요한 페이지 가져다주는 친구 */}
        <Routes>
          <Route path='/' element={<MainPage />}></Route>
          <Route path='/about' element={<AboutPage />}></Route>
          <Route path='/login' element={<LoginPage />}></Route>
          <Route path='/board' element={<Board />}></Route>
          <Route path='/detail' element={<Detail />}></Route>
          <Route path='/notfound' element={<NotFound />}></Route>
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
