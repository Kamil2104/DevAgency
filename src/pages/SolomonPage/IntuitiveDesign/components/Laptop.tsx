import React from 'react'

import { ReactSVG } from 'react-svg'

import MacBook from './assets/Device - Macbook Pro.svg'

import './styles/Laptop.css'

const Laptop: React.FC = React.memo(() => {
  return (
    <div className='laptopContainer'>
        <ReactSVG src={MacBook}/>
    </div>
  )
})

export default Laptop