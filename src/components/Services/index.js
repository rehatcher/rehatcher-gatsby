import React from "react"
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesH2,
  ServicesP,
  ServicesList,
} from "./ServicesElements"

const Services = () => {
  return (
    <ServicesContainer id="service">
      <ServicesH1>Our Services</ServicesH1>
      <p
        style={{
          paddingLeft: "50px",
          paddingRight: "50px",
          paddingBottom: "50px",
        }}
      >
        REHATCHER's expertise includes system development and integration, data
        governance, and training. Our teams have experiences in digital
        technology consulting and strong foundation in computer science.
      </p>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesH2>System Development and Integration</ServicesH2>
          <ServicesList>
            <li>System analysis and design</li>
            <li>Customised software development</li>
            <li>DevOps process design and implementation</li>
            <li>System integration</li>
          </ServicesList>
        </ServicesCard>
        <ServicesCard>
          <ServicesH2>Data Governance</ServicesH2>
          <ServicesList>
            <li>Data pipeline design and implementation</li>
            <li>Big data design and implementation</li>
            <li>Data infrastructure design and implementation</li>
          </ServicesList>
        </ServicesCard>
        <ServicesCard>
          <ServicesH2>Training</ServicesH2>
          <ServicesList>
            <p>In-house or online professional training including:</p>
            <li>Software development</li>
            <li>Data tools: Tableau, Power BI, Google Data Studio, etc.</li>
          </ServicesList>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services
