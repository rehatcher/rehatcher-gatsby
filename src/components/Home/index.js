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
    <div className="flex justify-center flex-col relative md:p-[50px]" id="home">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center mx-auto">

        <div className="order-2 md:order-1 flex flex-col justify-start p-[50px]">
          <h1 className=" text-4xl md:text-6xl not-italic font-normal">
            Your business reborns in the digital age.
            </h1>
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

        <div className="order-1 md:order-2 mt-20">
          <img className="w-full" src={HomeBanner} />
        </div>
      </div>
    </div>
  )
}

export default Home
