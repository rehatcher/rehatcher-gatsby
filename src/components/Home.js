import React from "react"
import HomeBanner from "../images/home-banner.png"

function Home() {
  return (
    <div
      className="flex justify-center flex-col md:p-[50px]"
      id="home"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 items-center">
        <div className="order-2 md:order-1 flex flex-col p-[50px]">
          <h1 className=" text-4xl md:text-6xl not-italic font-normal">
            Your business reborns in the digital age.
          </h1>

          <button className="bg-[#f5862e] text-[#fff] text-xs md:text-xl w-20 md:w-48 h-10 md:h-14 rounded-md mt-5 scroll-smooth">
            <a href="#contact">Contact Us</a>
          </button>
        </div>

        <div className="order-1 md:order-2 mt-20 md:m-0">
          <img className="w-full" src={HomeBanner} />
        </div>
      </div>
    </div>
  )
}

export default Home
