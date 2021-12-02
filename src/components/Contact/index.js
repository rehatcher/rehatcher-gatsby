import React from "react"
import { ContactContainer, ContactContent, FormWrap } from "./ContactElements"
function Contact() {
  return (
    <ContactContainer id="contact">
      <ContactContent>
        <h3>CONTACT US</h3>
        <form action="#">
          <FormWrap>
            <p>
              <input type="text" placeholder="Name" id="name" />
            </p>
            <p>
              <input type="text" placeholder="Email" id="email" />
            </p>
            <p>
              <input type="text" placeholder="Subject" id="subject" />
            </p>
            <p>
              <input type="text" placeholder="Message" id="message" />
            </p>

            <p>
              <button
                class="w3-button w3-black"
                type="submit"
                style={{ alignItems: "center" }}
              >
                <i class="fa fa-paper-plane"></i> SEND MESSAGE
              </button>
            </p>
          </FormWrap>
        </form>
      </ContactContent>
    </ContactContainer>
  )
}

export default Contact
