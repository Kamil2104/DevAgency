import React from 'react'

import Characteristics from './components/Characteristics'
import LargeDescription from './components/LargeDescription'
import SmallDescription from './components/SmallDescription'

import './WhyUs.css'

const WhyUs: React.FC = () => {
  return (
    <section className='whyUs'>
        <section className='whyUsContent'>
            <section className='firstRow'>
                <h1> We&apos;re more than just experts </h1>
            </section>
            <section className='secondRow'>
                <section className='secondRowContent'>
                    <Characteristics />
                    <LargeDescription />
                    <SmallDescription />
                </section>
            </section>
        </section>
    </section>
  )
}

export default WhyUs