import BigLogo from './components/BigLogo'
import ScrollDownSign from '../../../../components/SmallComponents/ScrollDownSign/ScrollDownSign'
import TextContent from './components/TextContent'

import BackgroundVideo from '../../../../assets/HeroBackgroundVideo.mp4'
import BackgroundTransition from '../../../../components/SmallComponents/BackgroundTransition/BackgroundTransition'

import './Hero.css'

const Hero: React.FC = () => {
  return (
    <section className='hero'>
      <video autoPlay loop muted playsInline className="heroVideo"> <source src={BackgroundVideo} type="video/mp4" /> Your browser does not support the video tag. </video>
      <BackgroundTransition />
      <div className='heroContent'>
        <div className='firstRow'>
          <BigLogo />
        </div>
        <div className='secondRow'>
          <TextContent />
          <ScrollDownSign page="HomePage" componentID="solomon"/>
        </div>
      </div>
    </section>
  )
}

export default Hero