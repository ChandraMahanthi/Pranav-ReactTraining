import React from 'react'
import Header from '../../components/header/Header'
import MainSection from '../../components/mainsection/MainSection'
import Footer from '../../components/footer/Footer'
import './About.css'

function About() {
  return (
    <div className='aboutpage'>About
        <Header></Header>
        <MainSection name="Pranav in " id = "About Page"></MainSection>
        <Footer></Footer>
    </div>

  )
}

export default About