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
    <ClientContainer id="client">
      <ClientH1>Our Clients</ClientH1>
      <ClientGrid>
        <ClientContent>
          <ClientImg src={dastaLogo} style={{height: "50px"}}/>
        </ClientContent>
        <ClientContent>
          <ClientImg src={colpalLogo}/>
        </ClientContent>
        <ClientContent>
          <ClientImg src={cysecLogo} style={{height: "80px"}}/>
        </ClientContent>
        <ClientContent>
          <ClientImg src={hondaLockLogo} style={{height: "150px"}}/>
        </ClientContent>
      </ClientGrid>
    </ClientContainer>
  )
}

export default Client
