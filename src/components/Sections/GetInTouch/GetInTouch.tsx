import React from 'react'

import useFormContext from '../../../hooks/useFormContext'

import Heading from './components/Heading'
import Description from './components/Description'
import Button from '../../../components/SmallComponents/Button/Button'

import './GetInTouch.css'
import './GetInTouchResponsiveness.css'

const GetInTouch: React.FC = () => {
  const { setIsFormDisplayed } = useFormContext()

  return (
    <section className='getInTouch'>
        <div className='getInTouchContent'>
            <div className='firstColumn'>
                <Heading />
                <Description />
            </div>
            <div className='secondColumn'>
                <Button text='Get in touch' onClick={() => { setIsFormDisplayed(true) }}/>
            </div>
        </div>
    </section>
  )
}

export default GetInTouch