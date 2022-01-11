import React from "react"
import { RiFacebookBoxFill, RiPhoneFill, RiMailSendFill } from "react-icons/ri"
const packageJson = require("/package.json")

const Footer = () => {
  return (
    <div
      className="flex justify-center flex-col md:p-[50px] bg-[#f5f5f5]"
      id="contact"
    >
      <h1 className="font-bold text-2xl not-italic text-[#f5862e] pt-6 md:py-0 px-[50px]">
        Contact Us
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 text-lg text-black/[0.8] px-[50px]">
        <div className="flex flex-col justify-start py-5 md:py-[50px]">
          <p className="">
            Rehatcher Co., Ltd.
            <br />
            279/15
            <br />
            Soi 30, Chaloem Phrakiat Rama 9 Rd.
            <br />
            Dok Mai
            <br />
            Prawet
            <br />
            Bangkok
            <br />
            10250
            <br />
            Thailand
          </p>
        </div>
        <div className="flex flex-col justify-start py-5 md:py-[50px]">
          <p>
            <RiMailSendFill style={{ "margin-right": "10px" }} />
            Email: info@rehatcher.com <br />
            <RiPhoneFill style={{ "margin-right": "10px" }} />
            Phone: +669 6964 4154 <br />
            <RiFacebookBoxFill style={{ "margin-right": "10px" }} />
            Facebook: Rehatcher <br />
            {/* Line: @rehatcher_th */}
          </p>
        </div>
      </div>
      <div style={{ textAlign: "right" }}>version: {packageJson.version}</div>
    </div>
  )
}

export default Footer
