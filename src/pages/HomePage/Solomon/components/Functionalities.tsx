import React from 'react'

import { FunctionalityCardProps } from '../interfaces/interfaces'

import './styles/Functionalities.css'

const Functionalities: React.FC<FunctionalityCardProps> = React.memo(({ functionalities }) => {
  return (
    <div className='functionalities'>
      {functionalities.map((functionality, index) => (
        <div className='functionalityCard' key={index}>
          <> {functionality.icon} </>
          <h3> {functionality.title} </h3>
          <p> {functionality.description} </p>
        </div>
      ))}
    </div>
  )
})

export default Functionalities