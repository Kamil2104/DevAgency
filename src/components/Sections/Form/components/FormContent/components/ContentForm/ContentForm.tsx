import React, { useState } from "react"

import Input from "./components/Input"
import RegionSelector from "./components/RegionSelector"
import ProductRequirements from "./components/ProductRequirements"
import Textarea from "./components/Textarea"
import PrivacyPolicyCheckbox from "./components/PrivacyPolicyCheckbox"
import SubmitButton from "./components/SubmitButton"

import useContentFormFunctions from "./functions/ContentFormFunctions"

import { UserData } from "../hooks/useFormUserData"
import { UserDataErrors } from "../hooks/useFormUserDataErrors"
import { UserDataSelectedProducts } from "../hooks/useFormUserSelectedProducts"

const ContentForm: React.FC<{ userData: UserData, setUserData: React.Dispatch<React.SetStateAction<UserData>>, userDataErrors: UserDataErrors, setUserDataErrors: React.Dispatch<React.SetStateAction<UserDataErrors>>, userSelectedProducts: UserDataSelectedProducts, setUserSelectedProducts: React.Dispatch<React.SetStateAction<UserDataSelectedProducts>> }> = React.memo(({ userData, setUserData, userDataErrors, setUserDataErrors, userSelectedProducts, setUserSelectedProducts }) => {
  const [selectedCountryCode, setSelectedCountryCode] = useState("")

  const [isProductRequirementsSelectOpened, setIsProductRequirementsSelectOpened] = useState(false)

  const { handleValueChangeInFormField, handleSelectingProductRequirements, handleDeselectingProductRequirements, handleSelectingRegion, handleProductRequirementsSelectToggle, handleClosingProductRequirementsSelect, handleFormSubmition
  } = useContentFormFunctions({ userData, setUserData, userDataErrors, setUserDataErrors, setSelectedCountryCode, userSelectedProducts, setUserSelectedProducts, isProductRequirementsSelectOpened, setIsProductRequirementsSelectOpened })

  return (
    <>
      <div className='contentForm'>
      <p className='errorMessage formError'> {userDataErrors.formError} </p>
        <div className='row'>
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
        </div>

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

        <div className='row'>
          <RegionSelector
            selectedCountryCode={selectedCountryCode}
            onSelect={handleSelectingRegion}
            error={userDataErrors.phoneNumberRegionError}
          />

          <Input
            className='halfSizeInput'
            id='phoneNumberInput'
            placeholder='+48*'
            value={userData.phoneNumber}
            onClick={() => handleClosingProductRequirementsSelect()}
            onChange={(e) => handleValueChangeInFormField('phoneNumber', e.target.value, 'phoneNumberError', 'phoneNumberInput')}
            error={userDataErrors.phoneNumberError}
          />
        </div>

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
      </div>

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