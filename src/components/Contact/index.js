import React from "react"
import {
  ContactContainer,
  ContactGrid,
  ContactContent,
  ContactH1,
  ContactP1,
  ContactP2,
} from "./ContactElements"

function Contact() {
  return (
    <ContactContainer id="contact">
      <ContactGrid>
        <ContactContent>
          <ContactH1>CONTACT US</ContactH1>
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
            Email: info@rehatcher.com <br />
            Phone: +669 6964 4154 <br />
            Facebook: REHATCHER <br />
            {/* Line: @rehatcher_th */}
          </ContactP2>
        </ContactContent>
      </ContactGrid>
    </ContactContainer>
  )
}

export default Contact
