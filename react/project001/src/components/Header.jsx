import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react'


const Header = () => {
  return (
    <div>
      <div id='logo'>
        <a href='/'>logo</a>
      </div>
      

      <div id='menu'>
        <Link to='/'><span>HOME  </span></Link>
        <Link to='/portfolio'><span>PORTFOLIO  </span></Link>
        <Link to='/contact'><span>CONTACT  </span></Link>
      </div>


    </div>
  )
}

export default Header