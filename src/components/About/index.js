import React from "react"
import {
  AboutContainer,
  AboutGrid,
  AboutContent,
  AboutH1,
  AboutP,
  AboutImg,
} from "./AboutElements"
import aboutImg from "../../images/about-logo.gif"

const About = () => {
  return (
    <div className="flex justify-center flex-col bg-white p-[50px]" id="about">
      <div className="grid my-auto grid-cols-2 items-center md:grid-cols-1">
        <div className="flex flex-col justify-start p-[50px]">
          <AboutImg src={aboutImg} />
        </div>
        <div className="flex flex-col justify-start p-[50[x]]">
          <h1 className="text-2xl not-italic font-bold">About Us</h1>
          <p className="text-lg py-6">
            Businesses are competing with other players, but now the competition
            involves players from different domains. Technology makes the world
            smaller, and staying still is stepping backward. <i>Your business
            needs to be digitised.</i> Digitisation is not about being trendy with
            tech but helps cut costs, ignore geolocation limits, and reach more
            customers. Let us help you stay ahead of the competition.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
