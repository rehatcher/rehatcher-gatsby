import styled from "styled-components"
import { Link } from "gatsby"
import { Link as LinkS } from "react-scroll"

export const Nav = styled.nav`
  background: rgba(255, 255, 255, 0.5);
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 999;
  font-size: 1rem;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 60px;
  z-index: 1;
  width: 100%;
  max-width: 1680px;
`

export const NavLogo = styled(Link)`
  color: #141414;
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  display: flex;
  align-items: center;
  font-size: 1.5rem;
`

export const NavImg = styled.img`
  height: 40px;

  @media screen and (max-width:960px) {
    height: 40px;
    padding-left: 10px;
  }
`

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 960px) {
    color: #f5862e;
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    cursor: pointer;
    font-size: 1.5rem;
  }
`
export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;

  @media screen and (max-width: 960px) {
    background: rgba(255, 255, 255, 0.5);
    display: flex;
    flex-direction: column;
    width: 100%;
    position: absolute;
    top: ${({ click }) => (click ? "100%" : "-1000px")};
    transition: all 0.2s ease;
  }
`

export const NavItem = styled.li`
  height: 60px;

  @media screen and (max-width: 960px) {
    width: 100%;
  }
`

export const NavLinks = styled(LinkS)`
  color: #f5862e;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 1rem;
  height: 100%;

  &:active {
    border-bottom: 3px solid #f5862e;
  }

  @media screen and (max-width: 960px) {
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;

    &:hover {
      color: #ff4040;
      transition: all 0.3s ease;
    }
  }
`
