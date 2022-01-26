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
      </Helmet>
      <Navbar />
      <main>{children}</main>
      <Footer />
      <CookieConsent
        location="bottom"
        buttonText="Accept"
        declineButtonText="Decline"
        cookieName="gatsby-gdpr-google-analytics"
      >
        <div className="px-[75px]">
          <h4>เว็บไซต์นี้ใช้คุกกี้</h4>
          เราใช้คุกกี้เพื่อเพิ่มประสิทธิภาพ
          และประสบการณ์ที่ดีในการใช้งานเว็บไซต์
          คุณสามารถเลือกตั้งค่าความยินยอมการใช้คุกกี้ได้ โดยคลิก
          "การตั้งค่าคุกกี้"นโยบายความเป็นส่วนตัว
        </div>
      </CookieConsent>
    </>
  )
}
