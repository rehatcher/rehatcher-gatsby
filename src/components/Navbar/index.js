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
  NavImg
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
          <NavLogo to="/">
            <NavImg src={Logo} />
          </NavLogo>
          <MobileIcon onClick={handleClick}>
            {click ? <FaTimes /> : <FaBars />}
          </MobileIcon>

          <NavMenu onClick={handleClick} click={click}>
            <NavItem>
              <NavLinks
                to="home"
                smooth={true}
                duration={800}
                spy={true}
                exact="true"
                offset={-80}
              >
                Home
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="about"
                smooth={true}
                duration={800}
                spy={true}
                exact="true"
                offset={-80}
              >
                About
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="service"
                smooth={true}
                duration={800}
                spy={true}
                exact="true"
                offset={-80}
              >
                Services
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="client"
                smooth={true}
                duration={800}
                spy={true}
                exact="true"
                offset={-80}
              >
                Clients
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="contact"
                smooth={true}
                duration={800}
                spy={true}
                exact="true"
                offset={-80}
              >
                Contact
              </NavLinks>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  )
}

export default Navbar

// const Navbar = ({ toggle }) => {
//   const [click, setClick] = useState(false)
//   const [scrollNav, setScrollNav] = useState(false)

//   const changeNav = () => {
//     if (window.scrollY >= 80) {
//       setScrollNav(true)
//     }

//     setScrollNav(false)
//   }

//   useEffect(() => {
//     window.addEventListener("scroll", changeNav)
//   }, [])

//   const toggleHome = () => {
//     scroll.scrollToTop()
//   }

//   return (
//     <>
//       <Nav scrollNav={scrollNav}>
//         <NavbarContainer>
//           <NavLogo to="home">
//             REHATCHER
//             {/* <NavLinks to="home">REHATCHER</NavLinks> */}
//           </NavLogo>
//           <MobileIcon onClick={toggleHome}>
//             <FaBars />
//           </MobileIcon>
//           <NavMenu>
//             <NavItem>
//               <NavLinks
//                 to="home"
//                 smooth={true}
//                 duration={500}
//                 spy={true}
//                 exact="true"
//                 offset={-80}
//               >
//                 Home
//               </NavLinks>
//             </NavItem>
//             <NavItem>
//               <NavLinks
//                 to="about"
//                 smooth={true}
//                 duration={500}
//                 spy={true}
//                 exact="true"
//                 offset={-80}
//               >
//                 About
//               </NavLinks>
//             </NavItem>
//             <NavItem>
//               <NavLinks
//                 to="service"
//                 smooth={true}
//                 duration={500}
//                 spy={true}
//                 exact="true"
//                 offset={-80}
//               >
//                 Services
//               </NavLinks>
//             </NavItem>
//             <NavItem>
//               <NavLinks
//                 to="client"
//                 smooth={true}
//                 duration={500}
//                 spy={true}
//                 exact="true"
//                 offset={-80}
//               >
//                 Clients
//               </NavLinks>
//             </NavItem>
//             <NavItem>
//               <NavLinks
//                 to="contact"
//                 smooth={true}
//                 duration={500}
//                 spy={true}
//                 exact="true"
//                 offset={-80}
//               >
//                 Contact
//               </NavLinks>
//             </NavItem>
//           </NavMenu>
//         </NavbarContainer>
//       </Nav>
//     </>
//   )
// }

// export default Navbar
