import React from "react"
import Logo from "../images/nav-logo.png"

const Navbar = ({ toggle }) => {
  const DEV_MODE = process.env.NODE_ENV === "development"
  
  return (
    <>
      <nav className="flex fixed items-center justify-between h-12 md:h-16 bg-white/[0.8] z-10 w-full text-[#f5862e]">
        <div className="flex px-[50px] md:px-[100px]">
          <div>
            <a href="/#home" className="flex cursor-pointer py-2">
              <img src={Logo} alt="Logo" className="h-10 md:h-14" />
            </a>
          </div>
        </div>

        <div
          className="flex md:hidden cursor-pointer px-[50px]"
          onClick={toggle}
        >
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </div>

        <div className="hidden md:block no-underline cursor-pointer px-[50px] md:px-[100px]">
          <a className="scroll-smooth" href="/#home">
            Home
          </a>
          <a className="scroll-smooth ml-8" href="/#about">
            About
          </a>
          <a className="scroll-smooth ml-8" href="/#service">
            Services
          </a>
          <a className="scroll-smooth ml-8" href="/#client">
            Clients
          </a>
          {DEV_MODE && (
            <>
              <a className="scroll-smooth ml-8" href="/blog">
                Blogs
              </a>
              <a className="scroll-smooth ml-8" href="/courses">
                Courses
              </a>
            </>
          )}
          <a className="scroll-smooth ml-8" href="/#contact">
            Contact
          </a>
        </div>
      </nav>
    </>
  )
}

export default Navbar
