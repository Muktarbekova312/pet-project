import React from 'react'
import './header.css'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className='header'>
      <p>HEADER</p>
      <nav>
      <Link to="/about">about us</Link>
      <Link to="#">login</Link>
      </nav>
    </div>
  )
}

export default Header
