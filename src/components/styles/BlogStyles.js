import styled from "styled-components"
import { Link } from "gatsby"
// import { createGlobalStyle } from "styled-components"

export const BlogContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  position: relative;
  z-index: 1;
  padding: 50px;
`

export const BlogWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 16px;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

export const BlogCard = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 16px;
  padding: 0 50px;
`

 export const BlogCardContent = styled.div`
  display: flex;
  flex-direction: column;
  list-style: none;
  display: grid;
  text-decoration: none;
`

 export const BlogImg = styled.img`
  width: 75vh;

  @media screen and (max-width: 768px) {
    width: 100%
  }
`

 export const BlogTitle = styled.h2`
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  text-decoration: none;
  margin-bottom: 5px;
`

 export const BlogP = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 30px;
  margin-top: 5px;

  letter-spacing: -0.015em;
`

 export const BlogDate = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 30px;
  margin-top: 5px;

  letter-spacing: -0.015em;
`

 export const BlogButton = styled(Link)`
  width: 130px;
  height: 40px;
  border-radius: 6px;
  white-space: nowrap;
  color: #f5862e;
  border: 2px solid #f5862e;
  margin-top: 30px;
  font-size: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;

  @media screen and (max-width: 768px) {
    width: 80px;
    height: 40px;
    font-size: 10px;
  }

  &:hover {
    text-decoration: none;
    cursor: pointer;
    transform: translate(-2px);
  }
`
