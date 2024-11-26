import React from 'react'

import BackgroundVideo from '../../../../../assets/HeroBackgroundVideo.mp4'

import './Background.css'

const Background: React.FC = () => {
  return (
    <div className='backgroundContainer'>
        <video autoPlay loop muted playsInline className="formVideo"> <source src={BackgroundVideo} type="video/mp4" /> Your browser does not support the video tag. </video>
        <div className='formContentBackground'><span></span></div>
    </div>
  )
}

export default Background