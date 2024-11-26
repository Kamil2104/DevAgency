import React from 'react'

import './styles/LeftColumn.css'

const LeftColumn: React.FC = () => {
  return (
    <div className='leftColumn'>
      <div className='row'>
        <h2> Who we are </h2> <h2 className='gradientedHeading'> &nbsp;& </h2>
      </div>
      <h2> What we do. </h2>
    </div>
  )
}

export default LeftColumn