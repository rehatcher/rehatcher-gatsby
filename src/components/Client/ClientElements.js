import styled from "styled-components"

export const ClientContainer = styled.div`
  height: 800px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background: #ffffff;

  @media screen and (max-width: 768px) {
    height: 1100px;
  }

  @media screen and (max-width: 480px) {
    height: 1300px;
  }
`

export const ClientGrid = styled.div`
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`

export const ClientH1 = styled.h1`
  margin-bottom: 64px;
  font-size: 48px;
  font-style: normal;
  font-weight: normal;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`

export const ClientContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  max-height: 340px;
  padding: 30px;
`

export const ClientImg = styled.img`
  width: 200px;
`
