import React, { useState } from "react"
import Navbar from "./Navbar"
import Dropdown from "./Dropdown"
import Footer from "./Footer"
import CookieConsent from "react-cookie-consent"

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }
  return (
    <>
      <Navbar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <main>{children}</main>
      <Footer />
      <CookieConsent
        location="bottom"
        buttonText="Accept"
        declineButtonText="Decline"
        cookieName="gatsby-gdpr-google-analytics"
      >
        <h4>เว็บไซต์นี้ใช้คุกกี้</h4>
        เราใช้คุกกี้เพื่อเพิ่มประสิทธิภาพ และประสบการณ์ที่ดีในการใช้งานเว็บไซต์
        คุณสามารถเลือกตั้งค่าความยินยอมการใช้คุกกี้ได้ โดยคลิก
        "การตั้งค่าคุกกี้"นโยบายความเป็นส่วนตัว
      </CookieConsent>
    </>
  )
}

export default Layout
