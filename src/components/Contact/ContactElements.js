import styled from "styled-components"

export const ContactContainer = styled.div`
  height: 800px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background: #f5f5f5;
  padding: 50px;

  @media screen and (max-width: 768px) {
    height: 1100px;
  }

  @media screen and (max-width: 480px) {
    height: 1300px;
  }
`

export const ContactGrid = styled.div`
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

export const ContactContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 50px;
`

export const ContactH1 = styled.h1`
  font-size: 24px;
  color: #f5862e;
  margin-bottom: 10px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`

export const ContactP1 = styled.p`
  margin-bottom: 10px;
  font-size: 18px;
  line-height: 30px;
  letter-spacing: -0.015em;
  color: rgba(0, 0, 0, 0.8);
`

export const ContactP2 = styled.p`
  margin-bottom: 118px;
  font-size: 18px;
  line-height: 30px;
  letter-spacing: -0.015em;
  color: rgba(0, 0, 0, 0.8);
`
