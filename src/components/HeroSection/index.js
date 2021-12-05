import React from "react"
import { HeroContainer, HeroImg } from "./HeroElements"
import LogoSrc from "../../images/rhc-logo.png"

function HeroSection() {
  return (
    <HeroContainer id="home">
      <HeroImg src={LogoSrc}/>
    </HeroContainer>
  )
}

export default HeroSection
