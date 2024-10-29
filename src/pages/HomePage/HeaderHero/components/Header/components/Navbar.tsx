import React from 'react'

import WhiteButton from '../../../../../../components/WhiteButton'

import { NavbarProps, OptionProps } from '../interfaces/interfaces'

import './styles/Navbar.css'

const Navbar: React.FC<NavbarProps> = ({ navbarOptions }) => {
  return (
    <nav>
      {navbarOptions.map((option) => (
        option.type === 'text' ?
          <TextOption key={option.text} text={option.text} />
        :
          <WhiteButton key={option.text} text={option.text} />
      ))}
    </nav>
  )
}

const TextOption: React.FC<OptionProps> = ({ text }) => {
  return (
    <span> {text} </span>
  )
}

export default Navbar
