import React from "react"
import New from "./New"
import Header from "./components/header/Header"
import MainSection from "./components/mainsection/MainSection"
import Footer from "./components/footer/Footer"
import About from "./pages/about/About"
import ContactUs from "./pages/contactus/ContactUs"
import ImageSlider from "./components/imageSlider/ImageSlider"
import Cards from "./components/profileCards/Cards"
import { data } from "./Data"

import './App.css'

function App() {
  return (

    <div>
            Home Page
      <Header></Header>

      {data.map((element)=>{ 
        return(<ImageSlider ImageS={element.ImageSource} names={element.name}/>)
      })}
      
      <MainSection></MainSection>
      <Footer></Footer>
      <About></About>
      <ContactUs></ContactUs>
      <Cards></Cards>
    </div>
  )
}

export default App