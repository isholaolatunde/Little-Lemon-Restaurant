import React from 'react'
import logo from '../assets/logo-mono.png';
const Footer = () => {
  return (
    <footer className='footer'>
      <div className="footer-logo">
        <img src={logo} alt="logo" />
        <p>Little Lemon</p>
      </div>
      <div className="doormat-links">
        <ul className="footer-links">
            <li><a href='# '>Home</a></li>
            <li><a href='# '>About</a></li>
            <li><a href='# '>Menu</a></li>
            <li><a href='# '>Reservations</a></li>
            <li><a href='# '>Order online</a></li>
            <li><a href='# '>Login</a></li>
        </ul>
      </div>
      <div className="footer-contacts">
        <ul className='footer-links'>
          <li><a href='# '>Adress</a></li>
          <li><a href='# '>Phone number</a></li>
          <li><a href='# '>E-mail</a></li>
        </ul>
      </div>
      <div className="social-media">
        <ul className='footer-links'>
          <li>Facebook</li>
          <li>Instagram</li>
          <li>Twitter</li>
        </ul>
      </div>
      
    </footer>
  )
}

export default Footer