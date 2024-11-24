import React from 'react'

import { InputProps } from './interfaces/interfaces'

import './styles/Input.css'

const Input: React.FC<InputProps> = ({ className, id, placeholder, value, onClick, onChange, error }) => {
  return (
    <section className={className}>
      <input
        id={id}
        type='text'
        placeholder={placeholder}
        value={value}
        onClick={() => onClick}
        onChange={onChange}
      />
      <p className='errorMessage'> {error} </p>
    </section>
  )
}

export default Input