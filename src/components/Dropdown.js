import React from "react"

const Dropdown = ({ isOpen, toggle }) => {
  const DEV_MODE = process.env.NODE_ENV === "development"

  return (
    <div
      className={isOpen ? "grid grid-rows-4 relative text-center items-center bg-white/[0.8] text-[#f5862e]" : "hidden"}
      onClick={toggle}
    >
      <a className="scroll-smooth" href="/#home">
        Home
      </a>
      <a className="scroll-smooth" href="/#about">
        About
      </a>
      <a className="scroll-smooth" href="/#service">
        Services
      </a>
      <a className="scroll-smooth" href="/#client">
        Clients
      </a>
      {DEV_MODE && (
        <>
          <a className="scroll-smooth " href="/blog">
            Blogs
          </a>
          <a className="scroll-smooth" href="/courses">
            Courses
          </a>
        </>
      )}
      <a className="scroll-smooth" href="/#contact">
        Contact
      </a>
    </div>
  )
}

export default Dropdown
