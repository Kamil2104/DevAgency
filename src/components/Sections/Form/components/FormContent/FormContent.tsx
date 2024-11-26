import React from 'react'

import Header from './components/Header'

import Title from './components/Title'
import Content from './components/Content'

import './FormContent.css'

const FormContent: React.FC = () => {
  return (
    <div className='formContent'>
      <Header />
      <div className='formColumns'>
        <div className='leftColumn'>
          <Title />
        </div>
        <div className='rightColumn'>
          <Content />
        </div>
      </div>
    </div>
  )
}

export default FormContent