import React from 'react'

import { LegalEfficiencyEnhancement } from '../interfaces/interfaces'

import './styles/Enhancement.css'

const Card: React.FC<LegalEfficiencyEnhancement> = React.memo(({ name, description }) => {
  return (
    <div className='enhancement'>
      <h5 className='name'> {name} </h5>
      <p className='description'> {description} </p>
    </div>
  )
})

export default Card