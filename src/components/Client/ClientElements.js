import styled from "styled-components"

export const ClientContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background: #ffffff;
  padding: 50px;
`

export const ClientGrid = styled.div`
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
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
  padding: 30px;
`

export const ClientImg = styled.img`
  height: 100px;
`
