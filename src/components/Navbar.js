import React, { useState } from "react"
import { FaBars, FaTimes } from "react-icons/fa"
import Logo from "../images/nav-logo.png"

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const DEV_MODE = process.env.NODE_ENV === "development"

  return (
    <>
      <nav className="flex fixed bg-white/[0.8] items-center justify-center w-full h-16 top-0 md:px-[100px] text-[#f5862e] z-10">
        <div className="flex items-center justify-between">
          <div>
            <a href="/#home" className="flex cursor-pointer px-[50px] md:px-0">
              <img
                src={Logo}
                alt="Logo"
                className="h-[40px] object-scale-down"
              />
            </a>
          </div>

          <div
            onClick={() => setOpen(!open)}
            className="flex md:hidden cursor-pointer px-[50px] md:px-0"
          >
            {open ? <FaTimes /> : <FaBars />}
          </div>

          <ul
            className={`bg-white/[0.8] flex flex-col md:flex-row items-center absolute md:static text-center w-full transition-all duration-500 ease-in ${
              open ? "top-full" : "top-[-1000px]"
            }`}
          >
            <li className="cursor-pointer h-7 md:ml-8">
              <a href="/#home">Home</a>
            </li>
            <li className="cursor-pointer h-7 md:ml-8">
              <a href="/#about">About</a>
            </li>
            <li className="cursor-pointer h-7 md:ml-8">
              <a href="/#service">Services</a>
            </li>
            <li className="cursor-pointer h-7 md:ml-8">
              <a href="/#client">Clients</a>
            </li>
            {DEV_MODE && (
              <>
                <li className="cursor-pointer h-7 md:ml-8">
                  <a href="/blog">Blogs</a>
                </li>
                <li className="cursor-pointer h-7 md:ml-8">
                  <a href="/courses">Courses</a>
                </li>
              </>
            )}
            <li className="cursor-pointer h-7 md:ml-8">
              <a href="/#contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar
