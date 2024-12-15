import React, { useState } from 'react'

import useIsMobileView from '../../../hooks/useIsMobileView'

import Title from './components/Title'
import Cards from './components/Cards'
import ProductCreationAxis from './components/ProductCreationAxis'

import './HowWeGetThingsDone.css'
import './HowWeGetThingsDoneResponsiveness.css'

const HowWeGetThingsDone: React.FC = () => {
  const { isMobileView } = useIsMobileView()

  const [activeCard, setActiveCard] = useState(0)

  return (
    <section className='howWeGetThingsDone'>
        <div className='howWeGetThingsDoneContent'>
            <Title />
            <Cards activeCard={activeCard} />
            {!isMobileView && <ProductCreationAxis activeCard={activeCard} setActiveCard={setActiveCard}/>}
        </div>
    </section>
  )
}

export default HowWeGetThingsDone