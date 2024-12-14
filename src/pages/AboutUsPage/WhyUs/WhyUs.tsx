import React from 'react'

import Characteristics from './components/Characteristics'
import LargeDescription from './components/LargeDescription'
import SmallDescription from './components/SmallDescription'

import './WhyUs.css'
import './WhyUsResponsiveness.css'

const WhyUs: React.FC = () => {
  return (
    <section className='whyUs' id='whyUs'>
        <div className='whyUsContent'>
            <div className='firstRow'>
                <h1> We&apos;re more than just experts </h1>
            </div>
            <div className='secondRow'>
                <div className='secondRowContent'>
                    <Characteristics />
                    <LargeDescription />
                    <SmallDescription />
                </div>
            </div>
        </div>
    </section>
  )
}

export default WhyUs