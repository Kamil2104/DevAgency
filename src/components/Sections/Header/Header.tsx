import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { useFormContext } from '../../../hooks/useFormContext'

import Logo from './components/Logo'
import Navbar from './components/Navbar'

import { NavbarOption } from './interfaces/interfaces'

import './Header.css'

const Header: React.FC = () => {
  const navigate = useNavigate()
  const { setIsFormDisplayed } = useFormContext()

  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(window.scrollY)

  const navbarOptions: NavbarOption[] = [
    { text: "Our products", type: "text", onClick: () => {} },
    { text: "About us", type: "text", onClick: () => { navigate('/AboutUs') } },
    { text: "Let's talk", type: "button", onClick: () => { setIsFormDisplayed(true) } },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false)
      } else {
        setIsVisible(true)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  return (
    <header className={`header ${isVisible ? "visible" : "hidden"}`}>
      <Logo />
      <Navbar navbarOptions={navbarOptions} />
    </header>
  )
}

export default Header