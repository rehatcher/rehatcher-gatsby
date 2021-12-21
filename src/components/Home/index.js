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
          <HomeH1>Your business reborns in the digital age.</HomeH1>
          <HomeButton
            to="contact"
            smooth={true}
            duration={800}
            spy={true}
            exact="true"
            offset={-80}
          >
            Contact Us
          </HomeButton>
        </HomeContent>
        <HomeContent>
          <HomeImg src={HomeBanner} />
        </HomeContent>
      </HomeGrid>
    </HomeContainer>
  )
}

export default Home
