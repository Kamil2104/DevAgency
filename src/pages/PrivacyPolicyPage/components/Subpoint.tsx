import React from 'react'

import Text from './Text'

import './styles/Subpoint.css'

const Subpoint: React.FC<{ value: string }> = ({ value }) => {
  return (
    <div className='subpoint'>
      <div className='subpointIcon'>
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <circle cx="12" cy="12" r="12" fill="#5E71FE"/> </svg>
      </div>
      <div className='subpointDescription'>
        <Text value={value} />
      </div>
    </div>
  )
}

export default Subpoint