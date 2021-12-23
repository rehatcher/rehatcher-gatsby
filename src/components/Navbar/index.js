import React, { useState, useEffect } from "react"
import { FaBars, FaTimes } from "react-icons/fa"
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavImg,
} from "./NavbarElements"
import Logo from "../../images/nav-logo.png"

const Navbar = () => {
  const [click, setClick] = useState(false)
  const [scrollNav, setScrollNav] = useState(false)

  const handleClick = () => setClick(!click)

  const changeNav = () => {
    if (window.scrollY >= 60) {
      setScrollNav(true)
    } else {
      setScrollNav(false)
    }
  }

  useEffect(() => {
    changeNav()
    window.addEventListener("scroll", changeNav)
  }, [])

  return (
    <>
      <Nav active={scrollNav} click={click}>
        <NavbarContainer>
          <NavLogo to="/#home">
            <NavImg src={Logo} />
          </NavLogo>
          <MobileIcon onClick={handleClick}>
            {click ? <FaTimes /> : <FaBars />}
          </MobileIcon>

          <NavMenu onClick={handleClick} click={click}>
            <NavItem>
              <NavLinks to="/#home">Home</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/#about">About</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="/#service"
              >
                Services
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/#client">Clients</NavLinks>
            </NavItem>
            {/* <NavItem>
              <NavLinks to="/blog">Blogs</NavLinks>
            </NavItem> */}
            <NavItem>
              <NavLinks to="/#contact">Contact</NavLinks>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  )
}

export default Navbar
