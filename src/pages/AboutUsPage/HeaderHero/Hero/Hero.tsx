import React from 'react'

import BackgroundTransition from '../../../../components/SmallComponents/BackgroundTransition/BackgroundTransition'
import TextContent from './components/TextContent'
import ScrollDownSign from '../../../../components/SmallComponents/ScrollDownSign/ScrollDownSign'

import BackgroundVideo from '../../../../assets/HeroBackgroundVideo.mp4'

import './Hero.css'
import './HeroResponsiveness.css'

const Hero: React.FC = () => {
  return (
    <section className='aboutUsHero'>
        <video autoPlay loop muted playsInline className="heroVideo"> <source src={BackgroundVideo} type="video/mp4" /> Your browser does not support the video tag. </video>
        <BackgroundTransition />
        <div className='heroContent'>
            <TextContent />
            <section className='iconContainer'>
              <ScrollDownSign page="AboutUsPage" componentID='whyUs' />
            </section>
        </div>
    </section>
  )
}

export default Hero