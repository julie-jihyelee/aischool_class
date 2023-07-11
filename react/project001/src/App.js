import './App.css';
import Main from './components/Main'
import Portfolio from './components/Portfolio'
import Header from './components/Header'
import Footer from './components/Footer'
import Contact from './components/Contact'
import { Route, Routes } from 'react-router-dom'




function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Main/>}></Route>
        <Route path='/portfolio' element={<Portfolio/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
      </Routes>
      <Footer/>
      
    </div>
  );
}

export default App;
