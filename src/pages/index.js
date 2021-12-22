import React from "react"
import About from "../components/About"
import Client from "../components/Client"
import Home from "../components/Home"
import Services from "../components/Services"
import Layout from "../components/layout"

function HomePage() {
  return (
    <>
      <Layout>
        <Home />
        <About />
        <Services />
        <Client />
      </Layout>
    </>
  )
}

export default HomePage
