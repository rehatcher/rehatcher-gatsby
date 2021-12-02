import React from "react"
import styled from "styled-components"

function Contact() {
  return (
    <ContactContainer>
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
              <button class="w3-button w3-black" type="submit" style={{ alignItems: "center"}}>
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

const ContactContainer = styled.div`
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.5) 0%,
    rgba(0, 0, 0, 0.5) 35%,
    rgba(0, 0, 0, 1) 100%
  );
  background-size: cover;
  height: 600px;
  width: 100%;
  padding: 128px 16px;
  color: #fff;
  display:flex;
  justify-content: center;
  align-items; center;
`

const ContactContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h3 {
    font-family: "Raleway", sans-serif;
    text-align: center;
    margin-bottom: 1rem;
    padding: 0 1rem;
  }

  p {
      text-align: center;
      padding: 0, 1rem;
      margin-bottom: 2rem;
  }

  form {
    z-index: 10;
  }
`

const FormWrap = styled.div`
  input {
    padding: 1rem 1.5rem;
    outline: none;
    width: 350px;
    height: 48px;
    border-radius: 50px;
    border: none;
    margin-right: 1rem;
  }

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    padding: 0 1rem;

    input {
      margin-bottom: 1rem;
      width: 100px;
      margin-right: 0;
    }
  }
`
