import React from 'react'

import Header from './components/Header'

import Title from './components/Title'
import Content from './components/Content'

import './FormContent.css'

const FormContent: React.FC = () => {
  return (
    <section className='formContent'>
      <Header />
      <section className='formColumns'>
        <section className='leftColumn'>
          <Title />
        </section>
        <section className='rightColumn'>
          <Content />
        </section>
      </section>
    </section>
  )
}

export default FormContent