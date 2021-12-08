import React from "react"
import {
  HomeContainer,
  HomeGrid,
  HomeContent,
  HomeD1,
  HomeH1,
  HomeButton,
  HomeD2,
  HomeImg,
} from "./HomeElements"
import HomeBanner from "../../images/home-banner.png"

function Home() {
  return (
    <HomeContainer id="home">
      <HomeGrid>
        <HomeContent>
          <HomeD1>
            <HomeH1>Let us rebirth your company in the digital age.</HomeH1>
            <HomeButton>Contact Us</HomeButton>
          </HomeD1>
        </HomeContent>
        <HomeContent>
          <HomeD2>
            <HomeImg src={HomeBanner} />
          </HomeD2>
        </HomeContent>
      </HomeGrid>
    </HomeContainer>
  )
}

export default Home
