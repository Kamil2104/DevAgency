import React from 'react'

import './styles/Subheading.css'

const Subheading: React.FC<{ value: string, style?: React.CSSProperties }> = React.memo(({ value, style }) => {
  const styles = style ? style : {}

  return (
    <h5 style={styles}> {value} </h5>
  )
})

export default Subheading