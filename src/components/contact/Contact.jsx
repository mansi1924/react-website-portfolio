import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const from = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_3bsvyup', 'template_3qndyzt', from.current, 'WA9nSkFWahBycouFQ')

    e.target.reset()
  };
  return (
    <section id="contact">
      <br/><h5>Get In Touch</h5>
      <h2>Contact Us</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icons'/>
            <h4>Email</h4>
            <h5>info@thedigitalindia.in</h5>
            <a href="mailto:info@thedigitalindia.in" target="_blank">Send a message</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className='contact__option-icons' />
            <h4>WhatsApp</h4>
            <h5>8751878878</h5>
            <a href="https://wa.me/8751878878" target="_blank">Send a message</a>
          </article>
        </div>
        {/* end of contact options */}
        <form ref={from} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder='Your Full Name' required/>
          <input type="email" name="email" placeholder='Your Email' required/>
          <input type="text" name="phone" placeholder="Your Number" required/>
          <textarea name='message' rows="4" placeholder="Your Message" required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact