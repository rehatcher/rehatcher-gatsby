import React from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
import CookieConsent from "react-cookie-consent"
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
      {/* <CookieConsent
        location="bottom"
        buttonText="Accept"
        declineButtonText="Decline"
        cookieName="gatsby-gdpr-google-analytics"
        style={{ padding: "0 75px" }}
        enableDeclineButton
      >
        <div className="text-left">
          เว็บไซต์นี้ใช้คุกกี้
          <span>
            เราใช้คุกกี้เพื่อเพิ่มประสิทธิภาพ
            และประสบการณ์ที่ดีในการใช้งานเว็บไซต์
            คุณสามารถตรวจสอบและทำความเข้าใจ{" "}
            <a href="#" className="text-blue-300">
              นโยบายคุกกี้
            </a>{" "}
            และ{" "}
            <a href="#" className="text-blue-300">
              นโยบายความเป็นส่วนตัว
            </a>
          </span>
        </div>
      </CookieConsent> */}
    </>
  )
}
