import React from 'react'

import { AddingContextPositivesInterface } from '../interfaces/interfaces'

import './styles/Card.css'

const Card: React.FC<AddingContextPositivesInterface> = React.memo((props) => {
  return (
    <div className='card'>
        {props.icon}
        <div className='divider'></div>
        <div className='content'>
            <h4> {props.name} </h4>
            <p> {props.description} </p>
        </div>
    </div>
  )
})

export default Card