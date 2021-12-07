import React from "react"
import { HomeContainer, HomeContent, HomeImg } from "./HomeElements"
import HomeBanner from "../../images/home-banner.png"
function Home() {
  return (
    <HomeContainer id="home">
      <HomeContent>
        <HomeImg src={HomeBanner} />
      </HomeContent>
    </HomeContainer>
  )
}

export default Home
