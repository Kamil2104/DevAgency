import React from 'react'

import './styles/Title.css'

const Title: React.FC = React.memo(() => {
  return (
    <h2> <span className='gradientedTitle'> Intuitive design </span> for seamless workflow </h2>
  )
})

export default Title