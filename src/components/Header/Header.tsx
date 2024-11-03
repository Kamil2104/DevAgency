import React from 'react'

import { useNavigate } from 'react-router-dom'

import { useFormContext } from '../../hooks/useFormContext'

import Logo from './components/Logo'
import Navbar from './components/Navbar'

import { NavbarOption } from './interfaces/interfaces'

import './Header.css'

const Header: React.FC = () => {
  const navigate = useNavigate()

  const { setIsFormDisplayed } = useFormContext()

  const navbarOptions: NavbarOption[] = [
    { text: "Our products", type: "text", onClick: () => { }},
    { text: "About us", type: "text", onClick: () => { navigate('/AboutUs') } },
    { text: "Let's talk", type: "button", onClick: () => { setIsFormDisplayed(true) } },
  ]

  return (
    <header>
      <Logo />
      <Navbar navbarOptions={navbarOptions} />
    </header>
  )
}

export default Header;