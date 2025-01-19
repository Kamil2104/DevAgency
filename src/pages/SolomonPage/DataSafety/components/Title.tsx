import React from 'react'

import './styles/Title.css'

const Title: React.FC = React.memo(() => {
  return (
    <h1> Your data is <span className='gradientedTitle'> safe <br /> </span> with us </h1>
  )
})

export default Title