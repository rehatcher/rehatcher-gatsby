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
  const DEV_MODE = process.env.NODE_ENV === "development"

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
      <nav className="flex bg-white/[0.8] justify-center fixed w-full h-16 top-0 z-10">
        <div className="md:flex items-center justify-between w-full px-14">
          <div className="items-center flex text-2xl">
            <a href="/#home" className="cursor-pointer">
              <img
                src={Logo}
                alt="Logo"
                className="h-[45px] w-[150px] object-scale-down"
              />
            </a>
          </div>
          <div className="md:hidden absolute cursor-pointer ">{click ? <FaTimes /> : <FaBars />}</div>
          <ul className="flex items-center text-[#f5862e] no-underline">
            <li className="cursor-pointer ml-8 scroll-smooth">
              <a href="/#home">Home</a>
            </li>
            <li className="cursor-pointer ml-8 scroll-smooth">
              <a href="/#about">About</a>
            </li>
            <li className="cursor-pointer ml-8 scroll-smooth">
              <a href="/#service">Services</a>
            </li>
            <li className="cursor-pointer ml-8 scroll-smooth">
              <a href="/#client">Clients</a>
            </li>
            {DEV_MODE && (
              <>
                <li className="cursor-pointer ml-8 scroll-smooth">
                  <a href="/blog">Blogs</a>
                </li>
                <li className="cursor-pointer ml-8 scroll-smooth">
                  <a href="/courses">Courses</a>
                </li>
              </>
            )}
            <li className="cursor-pointer ml-8 scroll-smooth">
              <a href="/#contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
      {/* <Nav active={scrollNav} click={click}>
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
              <NavLinks to="/#service">Services</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/#client">Clients</NavLinks>
            </NavItem>
            {DEV_MODE && (
              <>
                <NavItem>
                  <NavLinks to="/blog">Blogs</NavLinks>
                </NavItem>
                <NavItem>
                  <NavLinks to="/courses">Courses</NavLinks>
                </NavItem>
              </>
            )}
            <NavItem>
              <NavLinks to="/#contact">Contact</NavLinks>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav> */}
    </>
  )
}

export default Navbar
