import React from "react"
import {
  AboutContainer,
  AboutGrid,
  AboutContent,
  AboutH1,
  AboutP,
  AboutImg,
} from "./AboutElements"
import aboutImg from '../../images/about-logo.gif'

const About = () => {
  return (
    <AboutContainer id="about">
      <AboutGrid>
        <AboutContent>
          <AboutImg src={aboutImg} />
        </AboutContent>
        <AboutContent>
          <AboutH1>ABOUT US</AboutH1>
          <AboutP>
            We are experts in digital business transformation and system design.
            We can provide advice and analyze the current work process in order
            to design data structures and related parts that will allow us to
            bring information (Data) to use for maximum benefit (Insight) in
            terms of service, marketing, customer relations, and other tasks,
            including training employees with a team with over 20 years of
            experience.
          </AboutP>
        </AboutContent>
      </AboutGrid>
    </AboutContainer>
  )
}

export default About
