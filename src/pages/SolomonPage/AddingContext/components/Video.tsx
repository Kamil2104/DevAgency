import React from 'react'

import { ReactSVG } from 'react-svg'

import SolomonContext from './assets/Video.svg'

import './styles/Video.css'

const Video: React.FC = React.memo(() => {
  return (
    <div className='videoContainer'>
      <ReactSVG src={SolomonContext}/>
    </div>
  )
})

export default Video