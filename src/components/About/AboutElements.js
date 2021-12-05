import styled from "styled-components"

export const AboutContainer = styled.div`
  background: #ffffff;
  width: 100%;
  height: 600px;
  left: 0px;
  top: 1020px;
  position: absolute;

  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`

export const AboutH1 = styled.h1`
  font-size: 24px;
  color: #000000;
  width: 686px;
  height: 36px;
  left: 914px;
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
  left: 914px;
  top: 240px;
  
  font-size: 1rem;
  text-align: center;
`
