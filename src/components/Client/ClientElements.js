import styled from "styled-components"

export const ClientContainer = styled.div`
  position: absolute;
  width: 100%;
  left: 0px;
  top: 2220px;
  background: #ffffff;

  @media screen and (max-width: 768px) {
    height: 1100px;
  }

  @media screen and (max-width: 480px) {
    height: 1300px;
  }
`

export const ClientH1 = styled.h1`
  width: 100%;
  height: 72px;
  align-items: center;
  text-align: center;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`
