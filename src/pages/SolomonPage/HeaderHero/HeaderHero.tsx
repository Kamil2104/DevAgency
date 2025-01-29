import React from 'react'

import { ReactSVG } from 'react-svg'

import Header from '../../../components/Sections/Header/Header'

import SolomonOnDesktop from './assets/Desktop - Solomon.svg'

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
      <ReactSVG src={SolomonOnDesktop} className='solomonDesktop' />
    </section>
  )
}

export default HeaderHero