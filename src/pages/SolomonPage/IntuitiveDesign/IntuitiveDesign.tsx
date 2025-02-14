import React from 'react'

import Title from './components/Title'
import Description from './components/Description'

import './IntuitiveDesign.css'

const IntuitiveDesign: React.FC = React.memo(() => {
  return (
    <section className='intuitiveDesign'>
        <div className='leftColumn'>
            <Title />
        </div>
        <div className='rightColumn'>
            <Description />
        </div>
    </section>
  )
})

export default IntuitiveDesign