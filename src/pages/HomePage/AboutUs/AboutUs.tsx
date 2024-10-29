import React from 'react'

import Heading from './components/Heading'
import LeftColumn from './components/LeftColumn'
import RightColumn from './components/RightColumn'

import './AboutUs.css'

const AboutUs: React.FC = () => {
  return (
    <section className='aboutUs'>
        <section className='firstRow'>
          <Heading />
        </section>
        <section className='secondRow'>
            <LeftColumn />
            <RightColumn />
        </section>
    </section>
  )
}

export default AboutUs