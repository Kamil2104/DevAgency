import React from 'react'

import Heading from './components/Heading'
import LeftColumn from './components/LeftColumn'
import RightColumn from './components/RightColumn'

import './AboutUs.css'
import './AboutUsResponsiveness.css'

const AboutUs: React.FC = () => {
  return (
    <section className='aboutUs'>
      <div className='aboutUsContent'>
        <div className='firstRow'>
          <Heading />
        </div>
        <div className='secondRow'>
            <LeftColumn />
            <RightColumn />
        </div>
      </div>
    </section>
  )
}

export default AboutUs