import React from 'react'

import { useFormContext } from '../hooks/useFormContext';

import './styles/Button.css'

const Button: React.FC<{ text: string, stroke: string}> = ({ text, stroke }) => {
  const { setIsFormDisplayed } = useFormContext();

  return (
    <button
      className='originalBtn'
      onClick={() => text === "Let's talk" ? setIsFormDisplayed(true) : console.log('Nothing is here')}>
        {text}
        <svg width="24" height="24" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 12.1758L19 12.1758M19 12.1758L13 6.17578M19 12.1758L13 18.1758" stroke={stroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    </button>
  )
}

export default Button