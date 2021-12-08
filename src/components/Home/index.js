import React from "react"
import {
  HomeContainer,
  HomeGrid,
  HomeContent,
  HomeH1,
  HomeButton,
  HomeImg,
} from "./HomeElements"
import HomeBanner from "../../images/home-banner.png"

function Home() {
  return (
    <HomeContainer id="home">
      <HomeGrid>
        <HomeContent>
          <HomeH1>Let us rebirth your company in the digital age.</HomeH1>
          <HomeButton>Contact Us</HomeButton>
        </HomeContent>
        <HomeContent>
          <HomeImg src={HomeBanner} />
        </HomeContent>
      </HomeGrid>
    </HomeContainer>
  )
}

export default Home
