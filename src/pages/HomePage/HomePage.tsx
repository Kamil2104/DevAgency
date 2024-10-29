import React from 'react'

import HeaderHero from './HeaderHero/HeaderHero'
import Solomon from './Solomon/Solomon'
import Boosts from './Boosts/Boosts'
import AboutUs from './AboutUs/AboutUs'

const HomePage: React.FC = () => {
  return (
    <>
        <HeaderHero />
        <Solomon />
        <Boosts />
        <AboutUs />
    </>
  )
}

export default HomePage