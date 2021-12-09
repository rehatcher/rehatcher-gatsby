import styled from "styled-components"

export const ContactContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  background: #f5f5f5;
  padding: 50px;
`

export const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 16px;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

export const ContactContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 0 50px;
  transition: all 0.2s ease-in-out;
`

export const ContactH1 = styled.h1`
  font-size: 24px;
  color: #f5862e;
  font-style: normal;
  font-weight: normal;
  padding-left: 50px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`

export const ContactP1 = styled.p`
  font-size: 18px;
  line-height: 30px;
  letter-spacing: -0.015em;

  color: rgba(0, 0, 0, 0.8);
`

export const ContactP2 = styled.p`
  font-size: 18px;
  line-height: 30px;
  letter-spacing: -0.015em;

  color: rgba(0, 0, 0, 0.8);
`

export const ContactImg = styled.img`
  width: 250px;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`
