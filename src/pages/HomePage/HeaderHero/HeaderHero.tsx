import React from 'react'

import { ScrollProgressProvider } from '../../../context/ScrollProgress'

import Header from '../../../components/Sections/Header/Header'
import Hero from './Hero/Hero'

import './HeaderHero.css'

const HeaderHero: React.FC = () => {
  return (
    <section className='headerHero'>
      <Header />
      <ScrollProgressProvider>
        <Hero />
      </ScrollProgressProvider>
    </section>
  )
}

export default HeaderHero