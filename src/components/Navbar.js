import React, { useState } from "react"
import { FaBars, FaTimes } from "react-icons/fa"
import Logo from "../images/nav-logo.png"

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const DEV_MODE = process.env.NODE_ENV === "development"

  return (
    <>
      <nav className="bg-white/[0.8] flex fixed items-center justify-center w-full h-16 top-0 md:px-[100px] text-[#f5862e] z-10">
        <div className="flex justify-between w-full">
          <a
            href="/#home"
            className="flex cursor-pointer px-[50px] md:px-0"
          >
            <img src={Logo} alt="Logo" className="h-[40px] object-scale-down" />
          </a>

          <div
            onClick={() => setOpen(!open)}
            className="flex md:hidden items-center cursor-pointer px-[50px]"
          >
            {open ? <FaTimes /> : <FaBars />}
          </div>

          <ul
            className={`flex flex-col md:flex-row absolute md:static items-center w-full md:w-auto md:list-none md:text-center cursor-pointer transition-all duration-500 ease-in ${
              open ? "top-full bg-white/[0.8]" : "top-[-1000px]"
            }`}
          >
            <li className="h-7 md:ml-8">
              <a href="/#home" className="flex h-full items-center">Home</a>
            </li>
            <li className="h-7 md:ml-8">
              <a href="/#about" className="flex h-full items-center">About</a>
            </li>
            <li className="h-7 md:ml-8">
              <a href="/#service" className="flex h-full items-center">Services</a>
            </li>
            <li className="h-7 md:ml-8">
              <a href="/#client" className="flex h-full items-center">Clients</a>
            </li>
            {DEV_MODE && (
              <>
                <li className="h-7 md:ml-8">
                  <a href="/blog" className="flex h-full items-center">Blogs</a>
                </li>
                <li className="h-7 md:ml-8">
                  <a href="/courses" className="flex h-full items-center">Courses</a>
                </li>
              </>
            )}
            <li className="h-7 md:ml-8">
              <a href="/#contact" className="flex h-full items-center">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar
