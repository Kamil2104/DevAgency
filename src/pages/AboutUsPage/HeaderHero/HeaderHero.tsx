import React from 'react'

import Header from '../../../components/Sections/Header/Header'
import Hero from './Hero/Hero'

import './HeaderHero.css'

const HeaderHero: React.FC = () => {
  return (
    <section className='headerHero'>
      <Header />
      <Hero />
    </section>
  )
}

export default HeaderHero