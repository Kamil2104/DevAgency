import React from 'react'

import BackgroundVideo from '../../../../../assets/HeroBackgroundVideo.mp4'

import './Background.css'

const Background: React.FC<{ displayedFormContent: string }> = ({ displayedFormContent }) => {
  return (
    <div className='backgroundContainer'>
        <video autoPlay loop muted playsInline className={`formVideo ${displayedFormContent == 'ThanksToTheUser' ? 'full-screen' : ''}`}> <source src={BackgroundVideo} type="video/mp4" /> Your browser does not support the video tag. </video>
        <div className={`formContentBackground ${displayedFormContent == 'ThanksToTheUser' ? 'hide' : ''}`}><span></span></div>
    </div>
  )
}

export default Background