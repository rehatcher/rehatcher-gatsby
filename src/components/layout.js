import React from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
import { Helmet } from "react-helmet"

export default function Layout({ children }) {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>REHATCHER</title>
        {/* <!-- Cookie Consent by https://www.cookiewow.com --> */}
        <script
          type="text/javascript"
          src="https://cookiecdn.com/cwc.js"
        ></script>
        <script
          id="cookieWow"
          type="text/javascript"
          src="https://cookiecdn.com/configs/uqtSvxnGi1UztzqTQzu4HnGT"
          data-cwcid="uqtSvxnGi1UztzqTQzu4HnGT"
        ></script>
      </Helmet>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}
