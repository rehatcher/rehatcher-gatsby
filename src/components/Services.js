import React from "react"

const Services = () => {
  return (
    <div className="flex justify-center flex-col md:p-[50px]" id="service">
      <div className="font-normal not-italic p-[50px]">
        <h1 className="text-5xl">
          Our Services
        </h1>
        <p className="text-lg mt-[50px]">
          REHATCHER's expertise includes system development and integration,
          data governance, and training. Our teams have experiences in digital
          technology consulting and strong foundation in computer science.
        </p>
      </div>
  
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="block px-[50px]">
          <h2 className="mb-6 not-italic font-bold text-2xl">
            System Development and Integration
          </h2>
          <ul className="text-lg font-normal not-italic list-inside list-disc">
            <li>System analysis and design</li>
            <li>Customised software development</li>
            <li>DevOps process design and implementation</li>
            <li>System integration</li>
          </ul>
        </div>
        <div className="block px-[50px]">
          <h2 className="mb-6 not-italic font-bold text-2xl">
            Data Governance
          </h2>
          <ul className="text-lg font-normal not-italic list-inside list-disc">
            <li>Data pipeline design and implementation</li>
            <li>Big data design and implementation</li>
            <li>Data infrastructure design and implementation</li>
          </ul>
        </div>
        <div className="block px-[50px]">
          <h2 className="mb-6 not-italic font-bold text-2xl">Training</h2>
          <ul className="text-lg font-normal not-italic list-inside list-disc">
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
