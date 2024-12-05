import React from 'react'

import HamburgerIcon from './HamburgerIcon'

import { NavbarMobileViewProps } from '../interfaces/interfaces'

import './styles/NavbarMobileView.css'

const NavbarMobileView: React.FC<NavbarMobileViewProps> = React.memo(({ toggleIsMenuOpen, displayedIcon, setDisplayedIcon }) => {
  return (
    <nav className='mobileView'>
        <HamburgerIcon toggleIsMenuOpen={toggleIsMenuOpen} displayedIcon={displayedIcon} setDisplayedIcon={setDisplayedIcon} />
    </nav>
  )
})

export default NavbarMobileView