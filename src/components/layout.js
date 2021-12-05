import React, { useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { BrowserRouter as Router } from "react-router-dom"
import "./layout.css"
import "../styles/global.css"
import Navbar from "./Navbar"
import Sidebar from "./Sidebar"
import HeroSection from "./HeroSection"
import Services from "./Services"
import Contact from "./Contact"
import About from "./About"
import Client from "./Client"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      {/* <Header siteTitle={data.site.siteMetadata?.title || `Title`} /> */}
      <Router>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle} />
        <HeroSection />
        <About />
        <Services />
        <Client />
        <Contact />
        {/* <main>{children}</main> */}
      </Router>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
