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

function Client() {
  return (
    <ClientContainer id="client">
      <ClientH1>Our Clients</ClientH1>
      <ClientGrid>
        <ClientContent>
          <ClientImg src={dastaLogo}/>
        </ClientContent>
        <ClientContent>
          <ClientImg src={colpalLogo}/>
        </ClientContent>
        <ClientContent>
          <ClientImg src={cysecLogo}/>
        </ClientContent>
        <ClientContent></ClientContent>
        <ClientContent></ClientContent>
        <ClientContent></ClientContent>
        <ClientContent></ClientContent>
        <ClientContent></ClientContent>
      </ClientGrid>
    </ClientContainer>
  )
}

export default Client
