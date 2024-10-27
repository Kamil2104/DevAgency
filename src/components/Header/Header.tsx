import React from 'react'

import Logo from './components/Logo'
import Navbar from './components/Navbar'

import { NavbarOption } from './interfaces/interfaces'

import './Header.css'

const Header: React.FC = () => {
  const navbarOptions: NavbarOption[] = [
    { text: "Our products", type: "text" },
    { text: "About us", type: "text" },
    { text: "Let's talk", type: "button" },
  ]

  return (
    <header>
      <Logo />
      <Navbar navbarOptions={navbarOptions} />
    </header>
  )
}

export default Header;