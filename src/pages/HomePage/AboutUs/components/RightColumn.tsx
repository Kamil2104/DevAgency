import React from 'react'

import Button from '../../../../components/Button'

import './styles/RightColumn.css'

const RightColumn: React.FC = () => {
  return (
    <section className='rightColumn'>
      <Text />
      <Button text='Explore our story' stroke='#F4F4F4' />
    </section>
  )
}

const Text: React.FC = () => {
  return (
    <p>
      At Dev Agency, we create powerful AI solutions and custom applications that drive business growth.
      Our team turns ideas into reality, designing apps and websites tailored to your needs. Ready to innovate?
      Let&apos;s build something extraordinary together.
    </p>
  )
}

export default RightColumn