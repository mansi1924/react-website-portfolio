import React from 'react'
import './about.css'
import ME from '../../assets/white logo.png'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id="about" className='about'>
      <h5>Get To Know</h5>
      <h2>About US</h2>

      <div className="container about__container">
      <div className='about__flex'>
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="aboutimg" />
          </div>
        </div>
        <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>5+ Year Working</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>1000+ Customers</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>150+ Completed</small>
            </article>
          </div>
      </div>

        <div className="about__content">
          <p>
          "We, TDI Online Services are a professionally managed organization, engaged in service providing, Digital Marketing, Bulk SMS, e-Mail, Voice Call, Education Software, CRM Software, HRM App, Call Management Software. To finish these services with perfection, we work in close association with our customers and understand their precise necessities and demands to serve them, accordingly. Our offered services are enormously admired by our customers for their reliability, timely-execution, and affordable prices. These services are finished by industry certified professionals who follow all the rules and regulations of industry. Our team comprises of experts who are highly well-informed to offer top services. In addition, our services are finished after understanding the precise necessities of the consumer in order to offer the perfect solution. Hence, we have attained our organization goals within prearranged time period"
          </p>

          <a href="tel:+9694037795" className="btn">Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About