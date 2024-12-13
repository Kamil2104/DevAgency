import React from 'react'

import { FunctionalityCardProps } from '../interfaces/interfaces'

import './styles/Functionalities.css'

const Functionalities: React.FC<FunctionalityCardProps> = React.memo(({ functionalities }) => {
  return (
    <div className='functionalities'>
      {functionalities.map((functionality) => (
        <FunctionalityCard key={functionality.title} title={functionality.title} description={functionality.description} />
      ))}
    </div>
  )
})

const FunctionalityCard: React.FC<{ title: string, description: string }> = ({ title, description }) => {
  return (
    <div className='functionalityCard'>
      <h4> {title} </h4>
      <p> {description} </p>
    </div>
  )
}

export default Functionalities