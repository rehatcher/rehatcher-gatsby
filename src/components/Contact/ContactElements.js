import styled from "styled-components"

export const ContactContainer = styled.div`
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

export const ContactContent = styled.div`
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

export const FormWrap = styled.div`
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
