import React from 'react'
import './header.css'
import logo from '../../imgs/logo.svg'

function header() {
  return (
    <div className='app-header'>
        <div className='logo'>
            <img src={logo} alt='logo'></img>
            <p>Books Seal</p>
        </div>
    </div>
  )
}

export default header