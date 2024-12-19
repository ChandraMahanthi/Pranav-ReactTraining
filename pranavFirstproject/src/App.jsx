import React from "react"
import New from "./New"
import Header from "./components/header/Header"
import MainSection from "./components/mainsection/MainSection"
import Footer from "./components/footer/Footer"
import About from "./pages/about/About"
import ContactUs from "./pages/contactus/ContactUs"

import './App.css'

function App() {
  return (
    <div>
      Home Page
      <Header></Header>
      <MainSection name="Pranav"></MainSection>
      <Footer></Footer>
      <About></About>
      <ContactUs></ContactUs>
    </div>
  )
}

export default App