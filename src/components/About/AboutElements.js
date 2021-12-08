import styled from "styled-components"

export const AboutContainer = styled.div`
  position: absolute;
  background: #ffffff;
  display: flex;
  width: 100%;
  left: 0px;
  top: 1020px;
`

export const AboutGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  grid-gap: 1rem;
  margin: 100px;

  @media screen and (max-width: 960px) {
    grid-template-columns: 1fr;
  }
`

export const AboutContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`

export const AboutD1 = styled.div`
  position: absolute;
  width: 50vw;
`

export const AboutD2 = styled.div`
  width: 50vw;
`

export const AboutH1 = styled.h1`
  font-size: 24px;
  color: #000000;
  width: 686px;
  height: 36px;
  top: 180px;
  position: absolute;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`

export const AboutP = styled.p`
  position: absolute;
  width: 686px;
  height: 180px;
  top: 240px;
  font-size: 18px;
  line-height: 30px;
`

export const AboutImg = styled.img`
  width: 50vw;
`
