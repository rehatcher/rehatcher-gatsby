import styled from "styled-components"

export const AboutContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  background: #ffffff;
  padding: 50px;
`

export const AboutGrid = styled.div`
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  grid-gap: 16px;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

export const AboutContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 50px;
`

export const AboutH1 = styled.h1`
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 36px;

  @media screen and (max-width: 480px) {
    font-size: 24px;
  }
`

export const AboutP = styled.p`
  padding: 24px 0;
  font-size: 18px;
  line-height: 30px;
  letter-spacing: -0.015em;
`

export const AboutImg = styled.img`
  width: 100%;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`
