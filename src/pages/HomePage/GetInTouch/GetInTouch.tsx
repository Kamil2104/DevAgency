import React from 'react'

import Heading from './components/Heading'
import Description from './components/Description'
import Button from '../../../components/Button'

import './GetInTouch.css'

const GetInTouch: React.FC = () => {
  return (
    <section className='getInTouch'>
        <section className='getInTouchContent'>
            <section className='firstColumn'>
                <Heading />
                <Description />
            </section>
            <section className='secondColumn'>
                <Button text='Get in touch' stroke='#1D1D1D'/>
            </section>
        </section>
    </section>
  )
}

export default GetInTouch