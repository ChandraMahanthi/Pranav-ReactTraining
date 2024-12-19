import React from 'react'
import Header from '../../components/header/Header'
import MainSection from '../../components/mainsection/MainSection'
import Footer from '../../components/footer/Footer'
import ImageSlider from '../../components/imageSlider/ImageSlider'
import './About.css'

function About() {
  return (
    <div className='aboutpage'>About
        <Header></Header>
        <ImageSlider></ImageSlider>
        <MainSection name="Pranav in " id = "About Page"></MainSection>
        <Footer></Footer>
    </div>

  )
}

export default About