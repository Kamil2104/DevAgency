import React from 'react'

import './styles/Titles.css'

const Titles: React.FC = React.memo(() => {
  return (
    <div className='titles'>
      <h3> A HELPFUL FUNCTIONALITY </h3>
      <h1> Adding <span className='gradientedTitle'> context </span> </h1>
    </div>
  )
})

export default Titles