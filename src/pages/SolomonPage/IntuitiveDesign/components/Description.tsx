import React from 'react'

import './styles/Description.css'

const Description: React.FC = React.memo(() => {
  return (
    <p>
        Our app is designed to be <span className='whiteText'> simple and intuitive no expertise needed. </span>
        Start using it right away with ease, saving time and boosting productivity from day one.
        <span className='whiteText'> It&apos;s built for everyone </span>, making complex tasks simple.
    </p>
  )
})

export default Description