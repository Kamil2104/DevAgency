import React from 'react'

import { NavbarProps, OptionProps } from '../interfaces/interfaces'

import './styles/Navbar.css'

const Navbar: React.FC<NavbarProps> = ({ navbarOptions }) => {
  return (
    <nav>
      {navbarOptions.map((option) => (
        option.type === 'text' ?
          <TextOption key={option.text} text={option.text} />
        :
          <ButtonOption key={option.text} text={option.text} />
      ))}
    </nav>
  )
}

const TextOption: React.FC<OptionProps> = ({ text }) => {
  return (
    <span> {text} </span>
  )
}

const ButtonOption: React.FC<OptionProps> = ({ text }) => {
  return (
    <button> {text} </button>
  )
}

export default Navbar
