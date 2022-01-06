import React from "react"
import Header from "./Header"
import Footer from "./Footer"
import { GlobalStyle } from "./styles/GlobalStyles"
import CookieConsent from "react-cookie-consent"

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <Header />

      <main>{children}</main>
      <Footer />
      <CookieConsent
        location="bottom"
        buttonText="Accept"
        declineButtonText="Decline"
        cookieName="gatsby-gdpr-google-analytics"
      >
        This site uses cookies ...
      </CookieConsent>
    </>
  )
}

export default Layout
