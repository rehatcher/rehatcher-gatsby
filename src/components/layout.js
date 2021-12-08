import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { BrowserRouter as Router } from "react-router-dom"
import "./layout.css"
import Header from "./header"
import Navbar from "./Navbar"
import Home from "./Home"
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

  return (
    <>
      {/* <Header siteTitle={data.site.siteMetadata?.title || `Title`} /> */}
      <Router>
        <Navbar />
        <Home />
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
