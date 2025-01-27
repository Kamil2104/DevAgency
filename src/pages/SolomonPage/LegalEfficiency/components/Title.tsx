import React from 'react'

import './styles/Title.css'

const Title: React.FC = React.memo(() => {
  return (
    <h1> The smart choice for modern <p className='gradientedTitle'> Legal Efficiency </p> </h1>
  )
})

export default Title