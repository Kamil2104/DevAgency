import React from 'react'

import { NavbarMobileViewProps } from '../interfaces/interfaces'

import './styles/HamburgerIcon.css'

const HamburgerIcon: React.FC<NavbarMobileViewProps> = React.memo(({ toggleIsMenuOpen, displayedIcon, setDisplayedIcon }) => {
    return (
    <label className="burger" htmlFor="burger" onClick={(e) => {
        e.preventDefault();
        toggleIsMenuOpen()
        setDisplayedIcon(displayedIcon === "Hamburger" ? "Cross" : "Hamburger")
    }}>
        <input type="checkbox" id="burger" checked={displayedIcon === "Cross"}/>
        <span></span>
        <span></span>
        <span></span>
    </label>
  )
})

export default HamburgerIcon