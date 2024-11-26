import React from 'react'

import './styles/PointHeading.css'

const PointHeading: React.FC<{ value: string }> = React.memo(({ value }) => {
  return (
    <h3> {value} </h3>
  )
})

export default PointHeading