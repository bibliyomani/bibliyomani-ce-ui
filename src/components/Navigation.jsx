import React from 'react'
import { Navbar } from "flowbite-react";


const Navigation = () => {
  return (
    <Navbar
    fluid={true}
    rounded={true}
  >
    <Navbar.Brand href="https://flowbite.com/">
      <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
       Bibliyomani 
      </span>
    </Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse>
      <Navbar.Link
        href="/navbars"
        active={true}
      >
        Home
      </Navbar.Link>
      <Navbar.Link href="/navbars">
        About
      </Navbar.Link>
      <Navbar.Link href="/navbars">
        Services
      </Navbar.Link>
      <Navbar.Link href="/navbars">
        Pricing
      </Navbar.Link>
      <Navbar.Link href="/navbars">
        Contact
      </Navbar.Link>
    </Navbar.Collapse>
  </Navbar>
  )
}

export default Navigation