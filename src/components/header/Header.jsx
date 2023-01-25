import React from 'react'
import './header.css'
import CTA from './CTA'
// import ME from '../../assets/LOGO.png'
import Logo from '../../assets/white logo.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
      <div className="me">
          <img src={Logo} alt="logo" />
          <CTA />
      </div>
        
        <HeaderSocials />

        

        <a href="#contact" className="scroll__down">Scroll Down</a>
      </div>
    </header>
  )
}

export default Header