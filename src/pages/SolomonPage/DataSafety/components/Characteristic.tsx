import React from 'react'

import { CharacteristicType } from '../interfaces/interfaces'

import './styles/Characteristic.css'

const Characteristic: React.FC<{ data: CharacteristicType }> = React.memo(({ data }) => {
  return (
    <div className='characteristic'>
      <h4> {data.name} </h4>
      <p> {data.description} </p>
    </div>
  )
})

export default Characteristic