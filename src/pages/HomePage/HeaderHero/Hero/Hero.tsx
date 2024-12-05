import React from 'react'

import BigLogo from './components/BigLogo'
import BigLogoMobileView from './components/BigLogoMobileView'
import ScrollDownSign from '../../../../components/SmallComponents/ScrollDownSign/ScrollDownSign'
import TextContent from './components/TextContent'

import BackgroundVideo from '../../../../assets/HeroBackgroundVideo.mp4'
import BackgroundTransition from '../../../../components/SmallComponents/BackgroundTransition/BackgroundTransition'

import useIsMobileView from '../../../../hooks/useIsMobileView'

import './Hero.css'
import './HeroResponsiveness.css'

const Hero: React.FC = React.memo(() => {
  const { isMobileView } = useIsMobileView()

  return (
    <section className='hero'>
      <video autoPlay loop muted playsInline className="heroVideo"> <source src={BackgroundVideo} type="video/mp4" /> Your browser does not support the video tag. </video>
      <BackgroundTransition />
      <div className='heroContent'>
        <div className='firstRow'>
          {isMobileView
            ? <BigLogoMobileView />
            : <BigLogo />
          }
        </div>
        <div className='secondRow'>
          <TextContent />
          <ScrollDownSign page="HomePage" componentID="solomon"/>
        </div>
      </div>
    </section>
  )
})

export default Hero