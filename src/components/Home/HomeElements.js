import styled from "styled-components"

export const HomeContainer = styled.div`
  position: absolute;
  background: #ffffff;
  width: 100%;
  display: flex;
  left: 0px;
  top: 0px;
`

export const HomeGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  grid-gap: 1rem;
  margin: 100px;

  @media screen and (max-width: 960px) {
    grid-template-columns: 1fr;
  }
`

export const HomeContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`

export const HomeD1 = styled.div`
  position: absolute;
  width: 50vw;
  top: 45vh;
`

export const HomeH1 = styled.h1`
  font-size: 56px;
  line-height: 80px
  text-align: center;
  left: 80px;
  position: absolute;

  @media screen and (max-width: 960px) {
    font-size: 28px;
  }
`

export const HomeButton = styled.button`
  width: 192px;
  height: 52px;
  border-radius: 6px;
  white-space: nowrap;
  color: #fff;
  background: #f5862e;
  outline: none;
  border: none;
  font-size: 17px;
  font-weight: 500;
  left: 80px;
  top: 160px;
  position: absolute;

  @media screen and (max-width: 960px) {
    width: 80px;
    height: 30px;
    top: 200px;
    font-size: 10px;
  }
`
export const HomeD2 = styled.div`
  width: 50vw;
`

export const HomeImg = styled.img`
  width: 50vw;
`
