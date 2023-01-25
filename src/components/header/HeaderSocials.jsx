import React from "react";
import {BsLinkedin} from 'react-icons/bs'
import {BsFacebook} from 'react-icons/bs'
import {AiOutlineYoutube} from 'react-icons/ai'
import {AiOutlineInstagram} from 'react-icons/ai'
import {BsTwitter} from 'react-icons/bs'
import {BsWhatsapp} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/thedigitalindia/" target="_blank"><BsLinkedin/></a>
      <a href="https://www.facebook.com/thedigitalindia.in/" target="_blank"><BsFacebook/></a>
      <a href="https://www.youtube.com/@tdionlineservices8898" target="_blank"><AiOutlineYoutube/></a>
      <a href="https://www.instagram.com/thedigital_india" target="_blank"><AiOutlineInstagram/></a>
      <a href="https://twitter.com/thdigitalindia" target="_blank"><BsTwitter/></a>
      <a href="https://wa.me/8751878878" target="_blank"><BsWhatsapp/></a>

    </div>
  );
};

export default HeaderSocials;
