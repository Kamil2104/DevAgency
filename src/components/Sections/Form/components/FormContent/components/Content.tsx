import React from 'react'

import ContentForm from './ContentForm/ContentForm'

import useFormUserData from './hooks/useFormUserData'
import useFormUserDataErrors from './hooks/useFormUserDataErrors'
import useFormUserSelectedProducts from './hooks/useFormUserSelectedProducts'

import './styles/Content.css'

const Content: React.FC = () => {
  const { userData, setUserData } = useFormUserData()
  const { userDataErrors, setUserDataErrors } = useFormUserDataErrors()
  const { userSelectedProducts, setUserSelectedProducts } = useFormUserSelectedProducts()

  return (
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
  )
}

export default Content