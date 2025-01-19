import React from 'react'

import { LanguageModel } from '../interfaces/interfaces'

import './styles/Card.css'

const Card: React.FC<{ model: LanguageModel }> = React.memo(({ model }) => {
  return (
    <div className='card'>
        <div className='row'>
            {model.icon}
            <h4> {model.name} </h4>
        </div>
        <div className='divider' style={{ backgroundColor: model.color }}></div>
        <p> {model.description} </p>
    </div>
  )
})

export default Card