import React from "react"
import New from "./New"
import Header from "./components/Header"
import MainSection from "./components/MainSection"
import Footer from "./components/Footer"
import About from "./pages/About"
import ContactUs from "./pages/ContactUs"
import './App.css'

function App() {
  return (
    <div>
      Home Page
      <Header></Header>
      <MainSection></MainSection>
      <Footer></Footer>
      <About></About>
      <ContactUs></ContactUs>
    </div>
  )
}

export default App