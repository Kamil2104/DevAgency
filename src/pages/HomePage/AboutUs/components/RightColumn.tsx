import React from 'react'

import { useNavigate } from 'react-router-dom'

import useIsMobileView from '../../../../hooks/useIsMobileView'

import Button from '../../../../components/SmallComponents/Button/Button'

import './styles/RightColumn.css'

const RightColumn: React.FC = () => {
  const navigate = useNavigate()

  const isMobileView = useIsMobileView()

  return (
    <div className='rightColumn'>
      <Text />
      {isMobileView
        ? <div className='buttonContainer'> <Button text='Explore our story' onClick={() => navigate('/AboutUs')} /> </div>
        : <Button text='Explore our story' onClick={() => navigate('/AboutUs')} />
      }
    </div>
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