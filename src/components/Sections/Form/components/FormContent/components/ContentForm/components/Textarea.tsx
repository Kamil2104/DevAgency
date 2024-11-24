import React from 'react'

import { TextareaProps } from './interfaces/interfaces'

import './styles/Textarea.css'

const Textarea: React.FC<TextareaProps> = React.memo(({ value, onClick, onChange }) => {
  return (
    <textarea
      id="userMessageTextarea"
      placeholder='Tell us something more about your project.'
      rows={4}
      value={value}
      onClick={onClick}
      onChange={onChange}
    />
  )
})

export default Textarea