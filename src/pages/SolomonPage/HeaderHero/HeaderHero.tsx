import React from 'react'

import Header from '../../../components/Sections/Header/Header'

import './HeaderHero.css'

const HeaderHero: React.FC = () => {
  return (
    <section className='headerHero'>
        <Header />
        <Hero />
    </section>
  )
}

const Hero: React.FC = () => {
  return (
    <section className='hero'>
      <h1> Solomon </h1>
      <h3> An AI-powered legal tool that streamlines risk analysis, document summaries, and legal research. </h3>
    </section>
  )
}

export default HeaderHero