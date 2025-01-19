import React from 'react'

import './styles/Title.css'

const Title: React.FC = React.memo(() => {
  return (
    <h1> Adding <span className='gradientedTitle'> context </span> </h1>
  )
})

export default Title