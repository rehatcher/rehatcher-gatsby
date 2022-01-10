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
    <div className="flex justify-center flex-col relative p-[50px]" id="home">
      <div className="grid grid-cols-2 md:grid-cols-1 items-center mx-auto">
        <div className="flex flex-col justify-start p-[50px]">
          <h1 className="text-6xl not-italic font-normal">Your business reborns in the digital age.</h1>
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
        </div>
        <div className="flex flex-col justify-start p-[50px]">
          <img src={HomeBanner} />
        </div>
      </div>
    </div>
  )
}

export default Home
