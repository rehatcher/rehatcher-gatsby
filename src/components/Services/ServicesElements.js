import styled from "styled-components"

export const ServicesContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 50px;
`

export const ServicesWrapper = styled.div`
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

export const ServicesCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 0 50px;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`

export const ServicesH1 = styled.h1`
  font-size: 48px;
  font-style: normal;
  font-weight: normal;
  padding: 50px;

  @media screen and (max-width: 480px) {
    font-size: 24px;
  }
`

export const ServicesH2 = styled.h2`
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  margin-bottom: 24px;
`
export const ServicesP = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 30px;

  letter-spacing: -0.015em;
`
