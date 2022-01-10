import React from "react"
import {
  ClientContainer,
  ClientH1,
  ClientGrid,
  ClientContent,
  ClientImg,
} from "./ClientElements"
import colpalLogo from '../../images/Colpal_LOGO.png'
import dastaLogo from '../../images/DASTA_LOGO.png'
import cysecLogo from '../../images/Cysec_LOGO.png'
import hondaLockLogo from '../../images/honda-lock.png'

function Client() {
  return (
    <div className="flex justify-center flex-col items-center p-[50px]" id="client">
      <h1 className="text-5xl p-[50px] not-italic font-normal">Our Clients</h1>
      <div className="gird mx-auto grid-cols-4 items-center py-[50px] md:grid-cols-1 md:p-[20px]">
        <div className="flex flex-col justify-start items-center p-8">
          <img className="h-[50px]" src={dastaLogo}/>
        </div>
        <div className="flex flex-col justify-start items-center p-8">
          <img src={colpalLogo}/>
        </div>
        <div className="flex flex-col justify-start items-center p-8">
          <img className="h-20" src={cysecLogo}/>
        </div>
        <div className="flex flex-col justify-start items-center p-8">
          <img className="h-[150px]" src={hondaLockLogo}/>
        </div>
      </div>
    </div>
  )
}

export default Client
