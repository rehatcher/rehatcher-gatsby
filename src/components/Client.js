import React from "react"
import colpalLogo from "../images/Colpal_LOGO.png"
import dastaLogo from "../images/DASTA_LOGO.png"
import cysecLogo from "../images/Cysec_LOGO.png"
import hondaLockLogo from "../images/honda-lock.png"

function Client() {
  return (
    <div className="flex justify-center flex-col md:p-[50px]" id="client">
      <h1 className="text-5xl p-[50px] not-italic font-normal text-center">
        Our Clients
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-4 p-[20px] md:py-[50px]">
        <div className="flex flex-col justify-center items-center p-8">
          <img
            className="md:h-auto object-cover max-h-36 md:max-h-52"
            alt=""
            src={dastaLogo}
          />
        </div>
        <div className="flex flex-col justify-center items-center p-8">
          <img
            className="md:h-auto object-cover max-h-36 md:max-h-52"
            alt=""
            src={colpalLogo}
          />
        </div>
        <div className="flex flex-col justify-center items-center p-8">
          <img
            className="md:h-20 object-cover max-h-36 md:max-h-52"
            alt=""
            src={cysecLogo}
          />
        </div>
        <div className="flex flex-col justify-center items-center p-8">
          <img
            className="md:h-[150px] object-cover max-h-36 md:max-h-52"
            alt=""
            src={hondaLockLogo}
          />
        </div>
      </div>
    </div>
  )
}

export default Client
