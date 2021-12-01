import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const Services = () => (
  <Layout>
    <Seo title="Services" />
    <h1>Services</h1>
    <p>Services Services Services Services</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Services
