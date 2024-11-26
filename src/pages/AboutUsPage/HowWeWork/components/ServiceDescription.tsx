import React from 'react'

import { OurServices } from './interfaces/interfaces'

import './styles/ServiceDescription.css'

const ServiceDescription: React.FC<Partial<OurServices>> = React.memo(({ steps, activeIcon }) => {
  return (
    <div className='serviceDescription'>
      <div className='serviceDescriptionContent'>
          <div className='leftColumn'>
            <h4> Service includes </h4>
            {steps?.map((step) => (
              <StepPoint key={step} pointDescription={step} />
            ))}
          </div>
          <div className='rightColumn'>
            {activeIcon}
          </div>
      </div>
    </div>
  )
})

const StepPoint: React.FC<{ pointDescription: string }> = React.memo(({ pointDescription }) => {
  return (
    <div className='stepPoint'>
      <svg className='stepPoint' width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg"> <circle cx="10.5" cy="10" r="10" fill="#5E71FE"/> </svg>
      <p> {pointDescription} </p>
    </div>
  )
})

export default ServiceDescription