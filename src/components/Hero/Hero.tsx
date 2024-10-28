import BigLogo from './components/BigLogo'
import ScrollDownSign from './components/ScrollDownSign'
import TextContent from './components/TextContent'

import BackgroundVideo from './assets/HeroBackgroundVideo.mp4'

import './Hero.css'

const Hero: React.FC = () => {
  return (
    <section className='hero'>
      <video autoPlay loop muted playsInline className="heroVideo"> <source src={BackgroundVideo} type="video/mp4" /> Your browser does not support the video tag. </video>
      <section className='heroContent'>
        <section className='firstRow'>
          <BigLogo />
        </section>
        <section className='secondRow'>
          <TextContent />
          <ScrollDownSign />
        </section>
      </section>
    </section>
  )
}

export default Hero