import React from "react"
import {
  ContactContainer,
  ContactGrid,
  ContactContent,
  ContactH1,
  ContactP1,
  ContactP2,
} from "./ContactElements"
import { RiFacebookBoxFill, RiPhoneFill, RiMailSendFill } from "react-icons/ri"
const packageJson = require("/package.json")

function Contact() {
  return (
    <div className="flex justify-center flex-col bg-[#f5f5f5] p-14" id="contact">
      <h1 className="py-14 font-bold text-2xl not-italic mb-6 text-[#f5862e]">Contact Us</h1>
      <div className="grid grid-cols-3 md:grid-cols-1">
        <div className="flex flex-col justify-start py-[50px] transition-all">
          <p className="text-lg text-black/[0.8]">
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
        <div className="flex flex-col justify-start py-[50px] transition-all">
          <p className="text-lg text-black/[0.8]">
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

export default Contact
