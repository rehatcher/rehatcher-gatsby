import React from "react"
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesH2,
  ServicesP,
} from "./ServicesElements"

const Services = () => {
  return (
    <ServicesContainer id="service">
      <ServicesH1>Our Services</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesH2>Training</ServicesH2>
          <ServicesP>
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit, sed quia consequuntur magni dolores eos qui ratione
            voluptatem sequi nesciunt. Neque porro quisquam est.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesH2>Consulting</ServicesH2>
          <ServicesP>
            Amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris nisi.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesH2>System Development</ServicesH2>
          <ServicesP>
            Consequuntur magni dolores eos qui ratione voluptatem sequi
            nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit
            amet, consectetur, adipisci velit, sed quia non numquam.
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services
