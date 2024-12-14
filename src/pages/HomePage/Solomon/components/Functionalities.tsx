import React from 'react'

import useIsMobileView from '../../../../hooks/useIsMobileView'

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
  const isMobileView = useIsMobileView()

  return (
    <div className='functionalityCard'>
      {isMobileView ? <div className='dividerContainer'> <div className='divider'> </div> </div> : null}
      <h4> {title} </h4>
      <p> {description} </p>
    </div>
  )
}

export default Functionalities