import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'
import {TfiGoogle} from 'react-icons/tfi'
import {BsPinterest} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'
import {BsWhatsapp} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>TDI Online Services</a>
      <h5 className='footer__add'>B 200, Near Janta Store Circle, Bapu Nagar, Jaipur</h5><br/>

      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className='footer__socials'>
        <a href='https://www.facebook.com/thedigitalindia.in/'><FaFacebookF/></a>
        <a href='https://www.instagram.com/thedigitalindia.in/'><FiInstagram/></a>
        <a href='https://twitter.com/thdigitalindia'><IoLogoTwitter/></a>
        <a href="https://wa.me/8751878878" target="_blank"><BsWhatsapp/></a>
        <a href="https://www.linkedin.com/in/thedigitalindia/" target="_blank"><BsLinkedin/></a>
        <a href="https://www.tdionlineservices.in/" target="_blank"><TfiGoogle/></a>
        <a href="https://in.pinterest.com/thedigitalindia_in/" target="_blank"><BsPinterest/></a>
      </div>

      <div className='footer__copyright'>
        <small>&copy; TDIonlineservices. All rights reserved </small>
      </div>
    </footer>
  )
}
// whathappened
export default Footer