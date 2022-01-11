import React from "react"
import aboutImg from "../images/about-logo.gif"

const About = () => {
  return (
    <div className="flex justify-center flex-col md:p-[50px]" id="about">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center">
        <div className="flex flex-col justify-start md:p-[50px]">
          <img className="w-full" src={aboutImg} />
        </div>
        <div className="flex flex-col justify-start p-[50px] md:p-[50px]">
          <h1 className="text-2xl not-italic font-bold">About Us</h1>
          <p className="text-lg py-6 text-justify">
            Businesses are competing with other players, but now the competition
            involves players from different domains. Technology makes the world
            smaller, and staying still is stepping backward.{" "}
            <i>Your business needs to be digitised.</i> Digitisation is not
            about being trendy with tech but helps cut costs, ignore geolocation
            limits, and reach more customers. Let us help you stay ahead of the
            competition.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
