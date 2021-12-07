import React from "react"
import { HeroContainer, HeroImg } from "./HomeElements"
import LogoSrc from "../../images/rhc-logo.png"

function Home() {
  return (
    <HeroContainer id="home">
      <HeroImg src={LogoSrc}/>
    </HeroContainer>
  )
}

export default Home
