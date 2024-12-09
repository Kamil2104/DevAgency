import React from 'react'

import useIsMobileView from '../../../../hooks/useIsMobileView'

import { FunctionalityCardProps } from '../interfaces/interfaces'

import './styles/Functionalities.css'

const Functionalities: React.FC<FunctionalityCardProps> = React.memo(({ functionalities, contentDisplayDirection }) => {
  const { isMobileView } = useIsMobileView()

  return (
    <div className='functionalities'>
      {functionalities.map((functionality) => (
          contentDisplayDirection === 'columns' ? (
            <div className='functionalityCard' key={functionality.title}>
              <> {functionality.icon} </>
              <h3> {functionality.title} </h3>
              <p> {functionality.description} </p>
            </div>
          ) : contentDisplayDirection !== 'columns' && !isMobileView ? (
            <div className='functionalityCard' key={functionality.title}>
              <div className='row'>
                <> {functionality.icon} </>
                <h3> {functionality.title} </h3>
              </div>
              <p> {functionality.description} </p>
            </div>
          ) : null
      ))}
    </div>
  )
})

export default Functionalities