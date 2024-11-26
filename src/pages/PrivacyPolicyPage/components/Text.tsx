import React from 'react'

import './styles/Text.css'

const Text: React.FC<{ value: string }> = React.memo(({ value }) => {
  return (
    <p> {value} </p>
  )
})

export default Text