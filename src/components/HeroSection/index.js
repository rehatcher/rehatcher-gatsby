import React from "react"
import styled from "styled-components"
// import "./HeroSection.css"
import { HeroContainer, HeroImg } from "./HeroElements"
import LogoSrc from "../../images/rhc-logo.png"

function HeroSection() {
  return (
    <HeroContainer id="home">
      <HeroImg src={LogoSrc}/>
    </HeroContainer>
    // <div className="hero-container" id="home">
    //   <div className="hero-content"></div>
    // </div>
  )
}

export default HeroSection
