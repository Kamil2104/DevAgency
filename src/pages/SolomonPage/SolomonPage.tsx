import React from 'react'

import HeaderHero from './HeaderHero/HeaderHero'
import Comparison from './Comparison/Comparison'

const SolomonPage: React.FC = () => {
  return (
    <section className='solomonPage'>
        <HeaderHero />
        <Comparison />
    </section>
  )
}

export default SolomonPage