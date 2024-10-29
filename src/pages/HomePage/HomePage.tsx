import React from 'react'

import HeaderHero from './HeaderHero/HeaderHero'
import Solomon from './Solomon/Solomon'
import Boosts from './Boosts/Boosts'

const HomePage: React.FC = () => {
  return (
    <>
        <HeaderHero />
        <Solomon />
        <Boosts />
    </>
  )
}

export default HomePage