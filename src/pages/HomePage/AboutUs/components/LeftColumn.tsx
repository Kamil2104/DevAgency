import React from 'react'

import './styles/LeftColumn.css'

const LeftColumn: React.FC = () => {
  return (
    <section className='leftColumn'>
      <section className='row'>
        <h2> Who we are </h2> <h2 className='gradientedHeading'> &nbsp;& </h2>
      </section>
      <h2> What we do. </h2>
    </section>
  )
}

export default LeftColumn