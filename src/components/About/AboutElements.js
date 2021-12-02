import styled from "styled-components"

export const AboutContainer = styled.div`
  color: #fff;
  background: ${({ lightBg }) => (lightBg ? "#f9f9f9" : "#010606")};

  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`

export const AboutH1 = styled.h1`
  font-size: 2.5rem;
  color: #fff;
  margin-bottom: 64px;
  align-items: center;
  text-align: center;
  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`

export const AboutP = styled.p`
  font-size: 1rem;
  text-align: center;
`
