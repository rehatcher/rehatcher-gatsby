import React from "react"
import About from "../components/About"
import Client from "../components/Client"
import Home from "../components/Home"
import HomeBanner from "../images/home-banner.png"
import Services from "../components/Services"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import { Trans } from "gatsby-plugin-react-i18next"

function IndexPage() {
  return (
    <>
      <Layout>
        <Home />
        <About />
        <h1 className="text-center text-3xl">
          <Trans>Home</Trans>
        </h1>
        <Services />
        <Client />
      </Layout>
    </>
  )
}

export default IndexPage

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`
