import React from 'react'

import Button from '../../../SmallComponents/Button/Button'

import { NavbarProps, OptionProps } from '../interfaces/interfaces'

import './styles/Navbar.css'

const Navbar: React.FC<NavbarProps> = React.memo(({ navbarOptions }) => {
  return (
    <nav>
      {navbarOptions.map((option) => (
        option.type === 'text' ?
          <TextOption key={option.text} text={option.text} onClick={option.onClick} />
        :
          <Button key={option.text} text={option.text} onClick={option.onClick} />
      ))}
    </nav>
  )
})

const TextOption: React.FC<OptionProps> = React.memo(({ text, onClick }) => {
  return (
    <span onClick={onClick}> {text} </span>
  )
})

export default Navbar
