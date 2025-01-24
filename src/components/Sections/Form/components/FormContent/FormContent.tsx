import React from 'react'

import Header from './components/Header'

import Title from './components/Title'
import ContentForm from './components/ContentForm'

import useFormUserData from './components/hooks/useFormUserData'
import useFormUserDataErrors from './components/hooks/useFormUserDataErrors'
import useFormUserSelectedProducts from './components/hooks/useFormUserSelectedProducts'

import './FormContent.css'

const FormContent: React.FC<{ displayedFormContent: string }> = ({ displayedFormContent }) => {
  const { userData, setUserData } = useFormUserData()
  const { userDataErrors, setUserDataErrors } = useFormUserDataErrors()
  const { userSelectedProducts, setUserSelectedProducts } = useFormUserSelectedProducts()

  return (
    <div className={`formContent ${displayedFormContent === 'ThanksToTheUser' ? 'hide' : ''}`}>
      <Header />
      <div className='formColumns'>
        <div className='leftColumn'>
          <Title />
        </div>
        <div className='rightColumn'>
          <div className='rightColumnContent'>
            <h2> Your AI Transformation starts Here </h2>
            <h3> Fill in your details and DevAgency representative will give you a quick response. </h3>
            <ContentForm
              userData={userData}
              setUserData={setUserData}
              userDataErrors={userDataErrors}
              setUserDataErrors={setUserDataErrors}
              userSelectedProducts={userSelectedProducts}
              setUserSelectedProducts={setUserSelectedProducts}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default FormContent