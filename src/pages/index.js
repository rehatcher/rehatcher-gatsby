import React from "react"
import { BrowserRouter as Router } from "react-router-dom"
import About from "../components/About"
import Client from "../components/Client"
import Contact from "../components/Contact"
import Home from "../components/Home"
import Navbar from "../components/Navbar"
import Services from "../components/Services"

function HomePage() {
  return (
    <>
      <Router>
        <Navbar />
        <Home />
        <About />
        <Services />
        <Client />
        <Contact />
      </Router>
    </>
  )
}

export default HomePage
