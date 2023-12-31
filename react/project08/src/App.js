import './App.css';
import Header from './components/Header';
import {Link, Routes, Route} from 'react-router-dom';
import Main from './components/Main';
import Login from './components/Login';
import Talk from './components/Talk';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  

  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/main' element={<Main/>}/>
        <Route path='/talk' element={<Talk/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
      {/*  */}
    
    
    </div>
  );
}

export default App;
