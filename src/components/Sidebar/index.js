import React from "react"
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarMenu,
  SidebarLink,
  SidebarWrapper,
} from "./SidebarElements"

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="about" onClick={toggle}>About</SidebarLink>
          <SidebarLink to="service" onClick={toggle}>Service</SidebarLink>
          <SidebarLink to="contact" onClick={toggle}>Contact</SidebarLink>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar
