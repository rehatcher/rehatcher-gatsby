import React from "react"
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesH2,
  ServicesList,
} from "./ServicesElements"

const Services = () => {
  return (
    <div className="flex justify-center flex-col p-[50px]" id="service">
      <h1 className="text-5xl font-normal not-italic p-[50px]">Our Services</h1>
      <p
      className="text-lg font-normal not-italic">
        
        REHATCHER's expertise includes system development and integration, data
        governance, and training. Our teams have experiences in digital
        technology consulting and strong foundation in computer science.
      </p>
      <div className="grid grid-cols-3 md:grid-cols-1">
        <div className="flex flex-col justify-start px-[50px] transition-all">
          <h2 className="mb-6 not-italic font-bold text-2xl">System Development and Integration</h2>
          <ul className="text-lg font-normal not-italic list-inside">
            <li>System analysis and design</li>
            <li>Customised software development</li>
            <li>DevOps process design and implementation</li>
            <li>System integration</li>
          </ul>
        </div>
        <div className="flex flex-col justify-start px-[50px] transition-all">
          <h2 className="mb-6 not-italic font-bold text-2xl">Data Governance</h2>
          <ul className="text-lg font-normal not-italic list-inside">
            <li>Data pipeline design and implementation</li>
            <li>Big data design and implementation</li>
            <li>Data infrastructure design and implementation</li>
          </ul>
        </div>
        <div className="flex flex-col justify-start px-[50px] transition-all">
          <h2 className="mb-6 not-italic font-bold text-2xl">Training</h2>
          <ul className="text-lg font-normal not-italic list-inside">
            <p>In-house or online professional training including:</p>
            <li>Software development</li>
            <li>Data tools: Tableau, Power BI, Google Data Studio, etc.</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Services
