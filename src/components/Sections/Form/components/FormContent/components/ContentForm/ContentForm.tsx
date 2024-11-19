import React, { useState } from "react"

import Input from "./components/Input"
import ProductRequirements from "./components/ProductRequirements"
import Textarea from "./components/Textarea"
import PrivacyPolicyCheckbox from "./components/PrivacyPolicyCheckbox"
import SubmitButton from "./components/SubmitButton"

import useContentFormFunctions from "./hooks/ContentFormFunctions"

import { UserData } from "../hooks/useFormUserData"
import { UserDataErrors } from "../hooks/useFormUserDataErrors"
import { UserDataSelectedProducts } from "../hooks/useFormUserSelectedProducts"

const ContentForm: React.FC<{ userData: UserData, setUserData: React.Dispatch<React.SetStateAction<UserData>>, userDataErrors: UserDataErrors, setUserDataErrors: React.Dispatch<React.SetStateAction<UserDataErrors>>, userSelectedProducts: UserDataSelectedProducts, setUserSelectedProducts: React.Dispatch<React.SetStateAction<UserDataSelectedProducts>> }> = React.memo(({ userData, setUserData, userDataErrors, setUserDataErrors, userSelectedProducts, setUserSelectedProducts }) => {
  const [isProductRequirementsSelectOpened, setIsProductRequirementsSelectOpened] = useState(false)

  const {
    handleValueChangeInFormField,
    handleSelectingProductRequirements,
    handleDeselectingProductRequirements,
    handleProductRequirementsSelectToggle,
    handleClosingProductRequirementsSelect,
    handleFormSubmition
  } = useContentFormFunctions({ userData, setUserData, userDataErrors, setUserDataErrors, userSelectedProducts, setUserSelectedProducts, isProductRequirementsSelectOpened, setIsProductRequirementsSelectOpened })

  return (
    <>
      <section className='contentForm'>
      <p className='errorMessage formError'> {userDataErrors.formError} </p>
        <section className='row'>
            <Input
              className='halfSizeInput'
              id='firstNameInput'
              placeholder='First name*'
              value={userData.firstName}
              onClick={() => handleClosingProductRequirementsSelect()}
              onChange={(e) => handleValueChangeInFormField('firstName', e.target.value, 'firstNameError', 'firstNameInput')}
              error={userDataErrors.firstNameError}
            />

            <Input
              className='halfSizeInput'
              id='secondNameInput'
              placeholder='Second name*'
              value={userData.secondName}
              onClick={() => handleClosingProductRequirementsSelect()}
              onChange={(e) => handleValueChangeInFormField('secondName', e.target.value, 'secondNameError', 'secondNameInput')}
              error={userDataErrors.secondNameError}
            />
        </section>

        <Input
          className='fullSizeInput'
          id='companyNameInput'
          placeholder='Company name*'
          value={userData.companyName}
          onClick={() => handleClosingProductRequirementsSelect()}
          onChange={(e) => handleValueChangeInFormField('companyName', e.target.value, 'companyNameError', 'companyNameInput')}
          error={userDataErrors.companyNameError}
        />

        <Input
          className='fullSizeInput'
          id='businessEmailInput'
          placeholder='Business e-mail*'
          value={userData.businessEmail}
          onClick={() => handleClosingProductRequirementsSelect()}
          onChange={(e) => handleValueChangeInFormField('businessEmail', e.target.value, 'businessEmailError', 'businessEmailInput')}
          error={userDataErrors.businessEmailError}
        />

        <section className='row'>
          <Input
            className='halfSizeInput'
            id='phoneNumberInput'
            placeholder='+48*'
            value={userData.phoneNumber}
            onClick={() => handleClosingProductRequirementsSelect()}
            onChange={(e) => handleValueChangeInFormField('phoneNumber', e.target.value, 'phoneNumberError', 'phoneNumberInput')}
            error={userDataErrors.phoneNumberError}
          />
        </section>

        <ProductRequirements
          userData={userData}
          userSelectedProducts={userSelectedProducts}
          isProductRequirementsSelectOpened={isProductRequirementsSelectOpened}
          handleProductRequirementsSelectToggle={handleProductRequirementsSelectToggle}
          handleSelectingProductRequirements={handleSelectingProductRequirements}
          handleDeselectingProductRequirements={handleDeselectingProductRequirements}
        />

        <Textarea
          value={userData.message}
          onClick={() => handleClosingProductRequirementsSelect()}
          onChange={(e) => setUserData({ ...userData, message: e.target.value })}
        />
      </section>

      <PrivacyPolicyCheckbox
        userData={userData}
        setUserData={setUserData}
        userDataErrors={userDataErrors}
        setUserDataErrors={setUserDataErrors}
      />

      <SubmitButton handleFormSubmition={handleFormSubmition} />
    </>
  )
})

export default ContentForm