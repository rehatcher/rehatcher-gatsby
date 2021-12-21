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
    <AboutContainer id="about">
      <AboutGrid>
        <AboutContent>
          <AboutImg src={aboutImg} />
        </AboutContent>
        <AboutContent>
          <AboutH1>About Us</AboutH1>
          <AboutP>
            Businesses are competing with other players, but now the competition
            involves players from different domains. Technology makes the world
            smaller, and staying still is stepping backward. <i>Your business
            needs to be digitised.</i> Digitisation is not about being trendy with
            tech but helps cut costs, ignore geolocation limits, and reach more
            customers. Let us help you stay ahead of the competition.
          </AboutP>
        </AboutContent>
      </AboutGrid>
    </AboutContainer>
  )
}

export default About
