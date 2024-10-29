import React from 'react'

import Button from '../../../../../../components/Button'

import { NavbarProps, OptionProps } from '../interfaces/interfaces'

import './styles/Navbar.css'

const Navbar: React.FC<NavbarProps> = ({ navbarOptions }) => {
  return (
    <nav>
      {navbarOptions.map((option) => (
        option.type === 'text' ?
          <TextOption key={option.text} text={option.text} />
        :
          <Button key={option.text} text={option.text} stroke='#1D1D1D' />
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
