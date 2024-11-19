import React from 'react'

import { FooterProps } from '../interfaces/interfaces'

import './styles/Options.css'

const Options: React.FC<FooterProps> = React.memo(({ footerOptions }) => {
  return (
    <section className='options'>
        {footerOptions.map((footerOption) => (
            <span
                key={footerOption.text}
                onClick={footerOption.onClick}
            > {footerOption.text} </span>
        ))}
    </section>
  )
})

export default Options