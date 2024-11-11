import React from 'react'

import useFormContext from '../../../hooks/useFormContext'

import Heading from './components/Heading'
import Description from './components/Description'
import Button from '../../../components/SmallComponents/Button/Button'

import './GetInTouch.css'

const GetInTouch: React.FC = () => {
  const { setIsFormDisplayed } = useFormContext()

  return (
    <section className='getInTouch'>
        <section className='getInTouchContent'>
            <section className='firstColumn'>
                <Heading />
                <Description />
            </section>
            <section className='secondColumn'>
                <Button text='Get in touch' stroke='#1D1D1D' onClick={() => { setIsFormDisplayed(true) }}/>
            </section>
        </section>
    </section>
  )
}

export default GetInTouch