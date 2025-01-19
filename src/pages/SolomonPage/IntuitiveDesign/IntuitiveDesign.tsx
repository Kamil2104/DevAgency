import React from 'react'

import Laptop from './components/Laptop'
import Title from './components/Title'
import Description from './components/Description'

import './IntuitiveDesign.css'

const IntuitiveDesign: React.FC = React.memo(() => {
  return (
    <section className='intuitiveDesign'>
        <div className='leftColumn'>
            <Laptop />
        </div>
        <div className='rightColumn'>
            <Title />
            <Description />
        </div>
    </section>
  )
})

export default IntuitiveDesign