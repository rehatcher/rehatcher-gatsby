import React from "react"
import About from "../components/About"
import Client from "../components/Client"
import Home from "../components/Home"
import Services from "../components/Services"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import { Trans } from "gatsby-plugin-react-i18next"

function HomePage() {
  return (
    <>
      <Layout>
        <h1 className="text-center text-3xl">
          <Trans>Home</Trans>
        </h1>
        <Home />
        <About />
        <Services />
        <Client />
      </Layout>
    </>
  )
}

export default HomePage

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
