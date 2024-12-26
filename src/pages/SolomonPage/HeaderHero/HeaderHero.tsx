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
    <div> Hero </div>
  )
}

export default HeaderHero