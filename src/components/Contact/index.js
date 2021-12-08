import React from "react"
import {
  ContactContainer,
  ContactH3,
  ContactP1,
  ContactP2,
} from "./ContactElements"

function Contact() {
  return (
    <ContactContainer id="contact">
      <ContactH3>CONTACT US</ContactH3>
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
      <ContactP2>
        Email: info@rehatcher.com <br />
        Phone: +669 6964 4154 <br />
        {/* Line: @rehatcher_th */}
      </ContactP2>
      {/* <ContactContent>
        <h3></h3>
        <p>
          Rehatcher Co., Ltd.279/15 Soi 30, Chaloem Phrakiat Rama 9 Rd.Dok
          MaiPrawetBangkok 10250Thailand
        </p>
      </ContactContent> */}
    </ContactContainer>
  )
}

export default Contact
