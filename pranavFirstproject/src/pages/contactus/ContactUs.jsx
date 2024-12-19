import React from 'react'
import Header from '../../components/header/Header'
import MainSection from '../../components/mainsection/MainSection'
import Footer from '../../components/footer/Footer'
import './ContactUs.css'


function ContactUs() {
  return (
      <div className='contactus'>
        Contact Us
        <Header></Header>
        <MainSection name="Pranav in" id=" Contact Us Page"></MainSection>
        <Footer></Footer>
    </div>
  )
}

export default ContactUs