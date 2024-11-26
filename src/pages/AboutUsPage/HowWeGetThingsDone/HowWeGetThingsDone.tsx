import React, { useState } from 'react'

import Title from './components/Title'
import Cards from './components/Cards'
import ProductCreationAxis from './components/ProductCreationAxis'

import './HowWeGetThingsDone.css'

const HowWeGetThingsDone: React.FC = () => {
  const [activeCard, setActiveCard] = useState(0)

  return (
    <section className='howWeGetThingsDone'>
        <div className='howWeGetThingsDoneContent'>
            <Title />
            <Cards activeCard={activeCard} />
            <ProductCreationAxis activeCard={activeCard} setActiveCard={setActiveCard}/>
        </div>
    </section>
  )
}

export default HowWeGetThingsDone