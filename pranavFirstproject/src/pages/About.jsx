import React from 'react'
import Header from '../components/Header'
import MainSection from '../components/MainSection'
import Footer from '../components/Footer'

function About() {
 let styles = {color:"yellow" , backgroundColor:"black"};

  return (
    <div style={styles}>About
        <Header></Header>
        <MainSection></MainSection>
        <Footer></Footer>
    </div>

  )
}

export default About