import React from 'react'

import './styles/Title.css'

const Title: React.FC<{ value: string }> = React.memo(({ value }) => {
  return (
    <h1> {value} </h1>
  )
})

export default Title