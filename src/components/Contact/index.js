import React from "react"
import {
  ContactContainer,
  ContactGrid,
  ContactContent,
  ContactH1,
  ContactP1,
  ContactP2,
} from "./ContactElements"
import { RiFacebookBoxFill, RiPhoneFill, RiMailSendFill } from "react-icons/ri"

function Contact() {
  return (
    <ContactContainer id="contact">
      <ContactH1>Contact Us</ContactH1>
      <ContactGrid>
        <ContactContent>
          <ContactP1>
            Rehatcher Co., Ltd.
            <br />
            279/15
            <br />
            Soi 30, Chaloem Phrakiat Rama 9 Rd.
            <br />
            Dok Mai
            <br />
            Prawet
            <br />
            Bangkok
            <br />
            10250
            <br />
            Thailand
          </ContactP1>
        </ContactContent>
        <ContactContent>
          <ContactP2>
            <RiMailSendFill style={{ "margin-right": "10px" }} />
            Email: info@rehatcher.com <br />
            <RiPhoneFill style={{ "margin-right": "10px" }} />
            Phone: +669 6964 4154 <br />
            <RiFacebookBoxFill style={{ "margin-right": "10px" }} />
            Facebook: Rehatcher <br />
            {/* Line: @rehatcher_th */}
          </ContactP2>
        </ContactContent>
      </ContactGrid>
    </ContactContainer>
  )
}

export default Contact
