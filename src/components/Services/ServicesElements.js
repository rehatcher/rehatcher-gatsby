import styled from "styled-components"

export const ServicesContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 600px;
  left: 0px;
  top: 1620px;
  background: #FFFFFF;

  @media screen and (max-width: 768px) {
    height: 1100px;
  }

  @media screen and (max-width: 480px) {
    height: 1300px;
  }
`

export const ServicesWrapper = styled.div`
  max-width: 1680px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  margin: 100px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`

export const ServicesCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  height: 340px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
      transform: scale(1.02);
      transition: all 0.2s ease-in-out;
      cursor: pointer;
  }
`

export const ServicesIcon = styled.img`
  height: 160px;
  width: 160px;
  margin-bottom: 10px;
  position: absolute;
`

export const ServicesH1 = styled.h1`
  width: 100%;
  height: 72px;
  align-items: center;
  text-align: center;
  left: 80px;
  top: 97px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`

export const ServicesH2 = styled.h2`
  font-size: 1rem;
  margin-bottom: 10px;
`
export const ServicesP = styled.p`
  font-size: 1rem;
  text-align: center;
`
