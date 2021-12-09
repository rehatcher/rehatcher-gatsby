import styled from "styled-components"

export const AboutContainer = styled.div`
  height: 800px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  background: #ffffff;

  @media screen and (max-width: 768px) {
    height: 1100px;
  }

  @media screen and (max-width: 480px) {
    height: 1300px;
  }
`

export const AboutGrid = styled.div`
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

export const AboutContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 30px;
`

export const AboutH1 = styled.h1`
  font-size: 24px;
  font-style: normal;
  font-weight: normal;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`

export const AboutP = styled.p`
  padding: 24px 0;
  font-size: 18px;
  line-height: 30px;
  letter-spacing: -0.015em;
`

export const AboutImg = styled.img`
  width: 50vw;

  @media screen and (max-width: 768px) {
    width: 100vw;
  }
`
