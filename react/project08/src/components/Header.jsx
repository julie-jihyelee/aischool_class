import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { Link, Routes, Route } from 'react-router-dom';
import Main from './Main';
import Login from './Login';
import Talk from './Talk';


const Header = () => {
  return (
    <div className='header'>
      <div id='title'>
      <h1>Today News</h1>
      </div>
      <br />
      <ButtonGroup aria-label="Basic example">
        <Link to='/'><Button className='btn' variant="primary">Main</Button></Link>{' '}
        <Link to='/talk'><Button className='btn' variant="primary">Talk</Button></Link>{' '}
        <Link to='/login'><Button className='btn' variant="primary">Login</Button></Link>{' '}
      </ButtonGroup>


    </div>
  )
}

export default Header