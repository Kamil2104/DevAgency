import React from 'react'

import './styles/Title.css'

const Title: React.FC = React.memo(() => {
  return (
    <h2> <p className='gradientedTitle'> Intuitive design </p> for seamless workflow </h2>
  )
})

export default Title