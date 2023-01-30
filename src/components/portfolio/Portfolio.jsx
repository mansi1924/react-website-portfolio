import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/ems logo.png";
import IMG2 from "../../assets/ems driver.jpeg";
import IMG3 from "../../assets/Institute Logo..4-01 - Copy.jpg";
import IMG4 from "../../assets/20d058ec-14f5-4c54-92d0-1ea9ab01001f.jpeg";
import IMG5 from "../../assets/Dariya Milk Logo Driver-01 - Copy.png";
import IMG6 from "../../assets/614363c5-ef5f-457d-87cd-26185a3de51f.jpeg";
import IMG7 from "../../assets/512.jpeg";
import IMG8 from "../../assets/8998dcda-7374-48ed-98de-cd4a12498f4d.jpeg";
import IMG9 from "../../assets/task app.jpg";
import IMG10 from "../../assets/pasand.png";
import IMG11 from "../../assets/Quality Test Logo-7.1-01 - Copy.jpg";
import IMG12 from "../../assets/a128d022-9fe0-4194-8d1c-a30689bfd96a.jpeg";
import IMG13 from "../../assets/f7a56075-f4f4-43f2-a7d4-6a671155bdd4.jpeg";
import IMG14 from "../../assets/512.jpg";
import IMG15 from "../../assets/hello.webp";
import IMG16 from "../../assets/AP Acers Logo-2-01 - Copy.jpg";
import IMG17 from "../../assets/logo.jpeg";
import IMG18 from "../../assets/logo - Copy.png";
import IMG19 from "../../assets/school.webp";
import IMG20 from "../../assets/inst.webp";
import IMG21 from "../../assets/digital.webp";
import IMG22 from "../../assets/f7a34490-b50f-4a6b-8482-9250c553c568.jpeg";
import IMG23 from "../../assets/hrm.webp";
import IMG24 from "../../assets/visit.webp";
import IMG25 from "../../assets/logo.png";
import IMG26 from "../../assets/logo2.jpeg";
import IMG27 from "../../assets/elctro logo 2 yallow - Copy.png";
import IMG28 from "../../assets/WhatsApp Image 2022-09-24 at 10.15.44 AM.jpeg";
import IMG29 from "../../assets/99f6939f-7d13-4aaf-8881-e6fc543c6347.jpeg";
import IMG30 from "../../assets/c05d355b-ddcb-475c-be6f-c132c30518f0.jpeg";
import IMG31 from "../../assets/tech.png";
import IMG32 from "../../assets/08d15173-ee43-4827-8d0e-61371a538840.jpeg";
import IMG33 from "../../assets/6a892e1a-fac4-4e19-9cc9-ff3b8720ed66.jpeg";
import IMG34 from '../../assets/6153fd97-109a-4224-bfb1-e0b49497250f.jpeg';
import IMG35 from "../../assets/639a4589-39e1-4d8e-8c2e-8e0f3e1461b5.jpeg";
import IMG36 from '../../assets/53661a0c-252a-4a87-99f1-3fc0937c31d6.jpeg';
import IMG37 from "../../assets/b5f71c98-2c11-4baa-9440-50d387691668.jpeg";
import IMG38 from '../../assets/bad69a87-8f1c-4cde-ad4f-e91ceb0dcb7d.jpeg';
import IMG39 from '../../assets/sofware king logo new.jpg';

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <h2>Mobile Applications</h2>
      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>Ambulance Booking-User</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://play.google.com/store/apps/details?id=com.emsplus.ambulance.booking.online.jaipur.rajasthan.india.ems.plus"
              className="btn"
            >
              Visit Now
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.emsplus.ambulance.booking.online.jaipur.rajasthan.india.ems.plus"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG2} alt="" />
          </div>
          <h3>Ambulance Booking-Driver</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://play.google.com/store/apps/details?id=com.emsplus.ambulance.booking.online.jaipur.rajasthan.india.ems.drivers"
              className="btn"
            >
               Visit Now Now
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.emsplus.ambulance.booking.online.jaipur.rajasthan.india.ems.drivers"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG3} alt="" />
          </div>
          <h3>Hospital / Clinic</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://play.google.com/store/apps/details?id=com.p.esthetico.clinic.hair.body.skin.pestheticoclinic"
              className="btn"
            >
               Visit Now Now
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.p.esthetico.clinic.hair.body.skin.pestheticoclinic"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG4} alt="" />
          </div>
          <h3>Dairy Products-User</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://play.google.com/store/apps/details?id=com.dariyamilk.dairy.product"
              className="btn"
            >
              Visit Now
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.dariyamilk.dairy.product"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG5} alt="" />
          </div>
          <h3>Dairy Poduct-Driver</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://play.google.com/store/apps/details?id=com.dariya.milk.product.driver"
              className="btn"
            >
              Visit Now
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.dariya.milk.product.driver"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG6} alt="" />
          </div>
          <h3>Business Listing App</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://play.google.com/store/apps/details?id=com.add.book.classified.tdi.online.app.search.business.shop.nearby.addbook"
              className="btn"
            >
              Visit Now
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.add.book.classified.tdi.online.app.search.business.shop.nearby.addbook"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG7} alt="" />
          </div>
          <h3>Shipping Services Traning</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://play.google.com/store/apps/details?id=com.seastone"
              className="btn"
            >
              Visit Now
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.seastone"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG8} alt="" />
          </div>
          <h3>Medical Lab App</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://play.google.com/store/apps/details?id=com.tdi.online.services.the.digital.india.lab.test.app"
              className="btn"
            >
              Visit Now
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.tdi.online.services.the.digital.india.lab.test.app"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG9} alt="" />
          </div>
          <h3>Task Management App</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://play.google.com/store/apps/details?id=com.firestudio.projecttaskmgmt"
              className="btn"
            >
              Visit Now
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.firestudio.projecttaskmgmt"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG10} alt="" />
          </div>
          <h3>Matrimonial App</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://play.google.com/store/apps/details?id=com.tdi.online.services.software.king.matrimony.marriage.pasand.love.find.partner.partner.app"
              className="btn"
            >
              Visit Now
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.tdi.online.services.software.king.matrimony.marriage.pasand.love.find.partner.partner.app"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG12} alt="" />
          </div>
          <h3>Scrap Collection User App</h3>
          <div className="portfolio__item-cta">
            <a href="https://play.google.com/store/apps/details?id=com.cgi.cleanandgreenindia.clean_and_green_india" className="btn">
              Visit Now
            </a>
            <a href="https://play.google.com/store/apps/details?id=com.cgi.cleanandgreenindia.clean_and_green_india" className="btn btn-primary" target="_blank">
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG12} alt="" />
          </div>
          <h3>Scrap Collection Partner App</h3>
          <div className="portfolio__item-cta">
            <a href="https://play.google.com/store/apps/details?id=com.cleanandgreenindia.cgi_shop_partner" className="btn">
              Visit Now
            </a>
            <a href="https://play.google.com/store/apps/details?id=com.cleanandgreenindia.cgi_shop_partner" className="btn btn-primary" target="_blank">
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG11} alt="" />
          </div>
          <h3>Online Test App</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://play.google.com/store/apps/details?id=com.the.quality.test.tdi.services"
              className="btn"
            >
              Visit Now
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.the.quality.test.tdi.services"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG13} alt="" />
          </div>
          <h3>Home Service Booking</h3>
          <div className="portfolio__item-cta">
            <a href="" className="btn">
              Visit Now
            </a>
            <a href="" className="btn btn-primary" target="_blank">
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG14} alt="" />
          </div>
          <h3>Traning Center App</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://play.google.com/store/apps/details?id=com.worldover.sea.shipping.service"
              className="btn"
            >
              Visit Now
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.worldover.sea.shipping.service"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG15} alt="" />
          </div>
          <h3>Property listing App</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://play.google.com/store/apps/details?id=com.best.coworking.office.space.listing.nearby.rent.sale.finder.property&hl=en"
              className="btn"
            >
              Visit Now
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.best.coworking.office.space.listing.nearby.rent.sale.finder.property&hl=en"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG16} alt="" />
          </div>
          <h3>Property Listing App</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://play.google.com/store/apps/details?id=com.apacres.www"
              className="btn"
            >
              Visit Now
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.apacres.www"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG17} alt="" />
          </div>
          <h3>NIOS Institute App</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://play.google.com/store/apps/details?id=com.student.plus.tdi.services"
              className="btn"
            >
              Visit Now
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.student.plus.tdi.services"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG19} alt="" />
          </div>
          <h3>School App Parent</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://play.google.com/store/apps/details?id=com.the.digital.india.school.tdi"
              className="btn"
            >
              Visit Now
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.the.digital.india.school.tdi"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG20} alt="" />
          </div>
          <h3>Institute Management App</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://play.google.com/store/apps/details?id=com.institute.solutions"
              className="btn"
            >
              Visit Now
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.institute.solutions"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG21} alt="" />
          </div>
          <h3>Digital Visit Card</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://play.google.com/store/apps/details?id=com.digital.Visit Nowing.card.contact.eco.contact"
              className="btn"
            >
              Visit Now
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.digital.Visit Nowing.card.contact.eco.contact"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG22} alt="" />
          </div>
          <h3>The Digital India CRM Software</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://play.google.com/store/apps/details?id=com.tdi.the.digital.india.crm"
              className="btn"
            >
              Visit Now
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.tdi.the.digital.india.crm"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG23} alt="" />
          </div>
          <h3>Staff e-Attendance, Payroll & Meetings</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://play.google.com/store/apps/details?id=com.tdi.e.attendance.management.tdi.eattendance"
              className="btn"
            >
              Visit Now
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.tdi.e.attendance.management.tdi.eattendance"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG24} alt="" />
          </div>
          <h3>Visitor App</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://play.google.com/store/apps/details?id=com.tdi.the.digital.india.visitor.software.app.gateman.frontdesk.visitor.management"
              className="btn"
            >
              Visit Now
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.tdi.the.digital.india.visitor.software.app.gateman.frontdesk.visitor.management"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG18} alt="" />
          </div>
          <h3>Doctor/Hospital Booking</h3>
          <div className="portfolio__item-cta">
            <a href="" className="btn">
              Visit Now
            </a>
            <a href="" className="btn btn-primary" target="_blank">
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG38} alt="" />
          </div>
          <h3>Social Media App</h3>
          <div className="portfolio__item-cta">
            <a href="" className="btn">
              Visit Now
            </a>
            <a href="" className="btn btn-primary" target="_blank">
              Live Demo
            </a>
          </div>
        </article>
      </div>
      <br />
      <br />
      <br />
      <h2>Informative & e-Commerce Websites</h2>
      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG25} alt="" />
          </div>
          <h3>Clothing Website</h3>
          <div className="portfolio__item-cta">
            <a href="https://archoo.in/" className="btn">
              Visit Now
            </a>
            <a
              href="https://archoo.in/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG26} alt="" />
          </div>
          <h3>Jwelsy</h3>
          <div className="portfolio__item-cta">
            <a href="https://jwelsy.com/" className="btn">
              Visit Now
            </a>
            <a
              href="https://jwelsy.com/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG27} alt="" />
          </div>
          <h3>Electrical Item</h3>
          <div className="portfolio__item-cta">
            <a href="https://elctro.in/" className="btn">
              Visit Now
            </a>
            <a
              href="https://elctro.in/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG28} alt="" />
          </div>
          <h3>Import & Export Services</h3>
          <div className="portfolio__item-cta">
            <a href="https://s2mconsulting.in/" className="btn">
            Visit Now
            </a>
            <a
              href="https://s2mconsulting.in/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG10} alt="" />
          </div>
          <h3>Matrimonial Website</h3>
          <div className="portfolio__item-cta">
            <a href="https://pasand.app/" className="btn">
            Visit Now
            </a>
            <a
              href="https://pasand.app/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG29} alt="" />
          </div>
          <h3>CA Services Website</h3>
          <div className="portfolio__item-cta">
            <a href="https://rajonlineservice.com/" className="btn">
            Visit Now
            </a>
            <a
              href="https://rajonlineservice.com/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG30} alt="" />
          </div>
          <h3>Shree Dev Consultancy</h3>
          <div className="portfolio__item-cta">
            <a href="https://shreedevconsultancy.com/" className="btn">
            Visit Now
            </a>
            <a
              href="https://shreedevconsultancy.com/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG31} alt="" />
          </div>
          <h3>Teaching Website</h3>
          <div className="portfolio__item-cta">
            <a href="https://specialtech.in/" className="btn">
            Visit Now
            </a>
            <a
              href="https://specialtech.in/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG32} alt="" />
          </div>
          <h3>Handicraft Website</h3>
          <div className="portfolio__item-cta">
            <a href="https://cottagehandicraftindia.com/" className="btn">
            Visit Now
            </a>
            <a
              href="https://cottagehandicraftindia.com/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG33} alt="" />
          </div>
          <h3>Jewellery Website</h3>
          <div className="portfolio__item-cta">
            <a href="https://indiangemsandjewels.in/" className="btn">
            Visit Now
            </a>
            <a
              href="https://indiangemsandjewels.in/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG15} alt="" />
          </div>
          <h3>Property Listing Website</h3>
          <div className="portfolio__item-cta">
            <a href="https://helloproperty.in/" className="btn">
            Visit Now
            </a>
            <a
              href="https://helloproperty.in/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG34} alt="" />
          </div>
          <h3>Brain Bench</h3>
          <div className="portfolio__item-cta">
            <a href="https://brainbench.org/" className="btn">
            Visit Now
            </a>
            <a
              href="https://brainbench.org/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG35} alt="" />
          </div>
          <h3>Oxford International Academy</h3>
          <div className="portfolio__item-cta">
            <a href="http://oxford.thedigitalindia.net/" className="btn">
            Visit Now
            </a>
            <a
              href="http://oxford.thedigitalindia.net/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG39} alt="" />
          </div>
          <h3>Software king India</h3>
          <div className="portfolio__item-cta">
            <a href="https://softwareking.in/" className="btn">
            Visit Now
            </a>
            <a
              href="https://softwareking.in/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG36} alt="" />
          </div>
          <h3>Saurabh Jain</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://jainsaurabh.tdionlineservices.com/"
              className="btn"
            >
              Visit Now
            </a>
            <a
              href="https://jainsaurabh.tdionlineservices.com/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG37} alt="" />
          </div>
          <h3>Gamce Medical Services</h3>
          <div className="portfolio__item-cta">
            <a href="https://gamcamedicalservices.com/" className="btn">
            Visit Now
            </a>
            <a
              href="https://gamcamedicalservices.com/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
