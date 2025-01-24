import React, { useState } from "react"
import { useNavigate } from "react-router-dom"

import Button from "../../../../../SmallComponents/Button/Button"

import useFormContext from "../../../../../../hooks/useFormContext"
import useContentFormFunctions from "./functions/ContentFormFunctions"

import { UserData } from "./hooks/useFormUserData"
import { UserDataErrors } from "./hooks/useFormUserDataErrors"
import { UserDataSelectedProducts } from "./hooks/useFormUserSelectedProducts"

import { InputProps, PrivacyPolicyCheckboxProps, RegionSelectorProps, ProductRequirementsProps, TextareaProps, SubmitButtonProps } from "./interfaces/interfaces"

import ReactFlagsSelect from "react-flags-select"

import './styles/Input.css'
import './styles/PrivacyPolicyCheckbox.css'
import './styles/RegionSelector.css'
import './styles/ProductRequirements.css'
import './styles/Textarea.css'
import './styles/SubmitButton.css'

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

const Input: React.FC<InputProps> = React.memo(({ className, id, placeholder, value, onClick, onChange, error }) => {
  return (
    <div className={className}>
      <input
        id={id}
        type='text'
        placeholder={placeholder}
        value={value}
        onClick={() => onClick}
        onChange={onChange}
      />
      <p className='errorMessage'> {error} </p>
    </div>
  )
})

const PrivacyPolicyCheckbox: React.FC<PrivacyPolicyCheckboxProps> = React.memo(({ userData, setUserData, userDataErrors, setUserDataErrors }) => {
  const { setIsFormDisplayed } = useFormContext()

  const navigate = useNavigate()

  return (
      <div className='privacyPolicyCheckboxContainer'>
          <div className='privacyPolicyCheckboxContainerContent'>
              {userData.isPrivacyPolicyAgreementChecked
                ?
                  <svg
                    onClick={() =>
                      setUserData({ ...userData, isPrivacyPolicyAgreementChecked: false })
                    }
                    width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M20 16.8V7.19995V7.19666C20 6.07875 20 5.51945 19.7822 5.09204C19.5905 4.71572 19.2841 4.40973 18.9078 4.21799C18.48 4 17.9203 4 16.8002 4H7.2002C6.08009 4 5.51962 4 5.0918 4.21799C4.71547 4.40973 4.40973 4.71572 4.21799 5.09204C4 5.51986 4 6.07985 4 7.19995V16.8C4 17.9201 4 18.4802 4.21799 18.908C4.40973 19.2844 4.71547 19.5902 5.0918 19.782C5.51962 20 6.08009 20 7.2002 20H16.8002C17.9203 20 18.48 20 18.9078 19.782C19.2841 19.5902 19.5905 19.2844 19.7822 18.908C20 18.4806 20 17.9212 20 16.8032V16.8Z" fill="#5E71FE" stroke="#5E71FE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/> <path d="M8 12L11 15L16 9" stroke="#F4F4F4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                :
                  <svg
                    onClick={() => {
                      setUserData({ ...userData, isPrivacyPolicyAgreementChecked: true })
                      setUserDataErrors({...userDataErrors, isPrivacyPolicyAgreementCheckedError: '' })
                    }}
                    viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M20 16.8V7.19995V7.19666C20 6.07875 20 5.51945 19.7822 5.09204C19.5905 4.71572 19.2841 4.40973 18.9078 4.21799C18.48 4 17.9203 4 16.8002 4H7.2002C6.08009 4 5.51962 4 5.0918 4.21799C4.71547 4.40973 4.40973 4.71572 4.21799 5.09204C4 5.51986 4 6.07985 4 7.19995V16.8C4 17.9201 4 18.4802 4.21799 18.908C4.40973 19.2844 4.71547 19.5902 5.0918 19.782C5.51962 20 6.08009 20 7.2002 20H16.8002C17.9203 20 18.48 20 18.9078 19.782C19.2841 19.5902 19.5905 19.2844 19.7822 18.908C20 18.4806 20 17.9212 20 16.8032V16.8Z" stroke="#5E71FE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
              }
              <p> I agree to allow DevAgency to store and process my personal data in accordance with Centra&apos;s <span className='coloredParagraph' onClick={() => { navigate('/PrivacyPolicy'); setIsFormDisplayed(false) }}> privacy police* </span> </p>
          </div>
          <p className='errorMessage'> {userDataErrors.isPrivacyPolicyAgreementCheckedError} </p>
      </div>
    )
})

const RegionSelector: React.FC<RegionSelectorProps> = React.memo(({ selectedCountryCode, onSelect, error }) => {
  return (
    <div className='regionSelectorContainer'>
      <ReactFlagsSelect
          id='regionSelector'
          selected={selectedCountryCode}
          onSelect={(code) => onSelect(code)}
          placeholder="Select a country code*"
          className={selectedCountryCode ? 'regionSelectorSelected' : 'regionSelector'}
          selectButtonClassName="regionSelectorButton"
      />
      <p className='errorMessage'> {error} </p>
    </div>
  )
})

const ProductRequirements: React.FC<ProductRequirementsProps> = React.memo(({ userData, userSelectedProducts, isProductRequirementsSelectOpened, handleProductRequirementsSelectToggle, handleSelectingProductRequirements, handleDeselectingProductRequirements }) => {
  return (
    <div className='selectContainer'>
      <div onClick={() => handleProductRequirementsSelectToggle()} id={isProductRequirementsSelectOpened ? "productRequirementsOpened" : "productRequirementsClosed"} className='fullSizeInput'>
        {userData.productRequirements.length > 0
          ? <p className='selectedProductRequirementsOptions'> {userData.productRequirements.join(", ")} </p>
          : <p className='selectedProductRequirementsOptionsPlaceholder'> Product requirements </p>
        }

        <div className='iconContainer'>
          {isProductRequirementsSelectOpened
            ? <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 9L12 15L6 9" stroke="#131313" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            : <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 15.5L12 9.5L18 15.5" stroke="#F6F6F6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
          }
        </div>
      </div>
      <div className={`productRequirementsOptions ${isProductRequirementsSelectOpened ? "open" : "closed"}`}>
        <div className='productRequirementsOptionRow'>
            {userSelectedProducts.websiteDevelopment === true
              ? <svg onClick={() => handleDeselectingProductRequirements('websiteDevelopment', 'Website Development')} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M20 16.8V7.19995V7.19666C20 6.07875 20 5.51945 19.7822 5.09204C19.5905 4.71572 19.2841 4.40973 18.9078 4.21799C18.48 4 17.9203 4 16.8002 4H7.2002C6.08009 4 5.51962 4 5.0918 4.21799C4.71547 4.40973 4.40973 4.71572 4.21799 5.09204C4 5.51986 4 6.07985 4 7.19995V16.8C4 17.9201 4 18.4802 4.21799 18.908C4.40973 19.2844 4.71547 19.5902 5.0918 19.782C5.51962 20 6.08009 20 7.2002 20H16.8002C17.9203 20 18.48 20 18.9078 19.782C19.2841 19.5902 19.5905 19.2844 19.7822 18.908C20 18.4806 20 17.9212 20 16.8032V16.8Z" fill="#131313" stroke="#131313" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/> <path d="M8 12L11 15L16 9" stroke="#F4F4F4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/> </svg>
              : <svg onClick={() => handleSelectingProductRequirements('websiteDevelopment', 'Website Development')} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <g clipPath="url(#clip0_616_435)"> <path d="M20 16.8V7.19995V7.19666C20 6.07875 20 5.51945 19.7822 5.09204C19.5905 4.71572 19.2841 4.40973 18.9078 4.21799C18.48 4 17.9203 4 16.8002 4H7.2002C6.08009 4 5.51962 4 5.0918 4.21799C4.71547 4.40973 4.40973 4.71572 4.21799 5.09204C4 5.51986 4 6.07985 4 7.19995V16.8C4 17.9201 4 18.4802 4.21799 18.908C4.40973 19.2844 4.71547 19.5902 5.0918 19.782C5.51962 20 6.08009 20 7.2002 20H16.8002C17.9203 20 18.48 20 18.9078 19.782C19.2841 19.5902 19.5905 19.2844 19.7822 18.908C20 18.4806 20 17.9212 20 16.8032V16.8Z" stroke="#1D1D1D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/> </g> <defs> <clipPath id="clip0_616_435"> <rect width="24" height="24" fill="white"/> </clipPath> </defs> </svg>
            }
            <p> Website development </p>
        </div>
        <div className='productRequirementsOptionRow'>
            {userSelectedProducts.websiteDesign === true
              ? <svg onClick={() => handleDeselectingProductRequirements('websiteDesign', 'Website Design')} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M20 16.8V7.19995V7.19666C20 6.07875 20 5.51945 19.7822 5.09204C19.5905 4.71572 19.2841 4.40973 18.9078 4.21799C18.48 4 17.9203 4 16.8002 4H7.2002C6.08009 4 5.51962 4 5.0918 4.21799C4.71547 4.40973 4.40973 4.71572 4.21799 5.09204C4 5.51986 4 6.07985 4 7.19995V16.8C4 17.9201 4 18.4802 4.21799 18.908C4.40973 19.2844 4.71547 19.5902 5.0918 19.782C5.51962 20 6.08009 20 7.2002 20H16.8002C17.9203 20 18.48 20 18.9078 19.782C19.2841 19.5902 19.5905 19.2844 19.7822 18.908C20 18.4806 20 17.9212 20 16.8032V16.8Z" fill="#131313" stroke="#131313" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/> <path d="M8 12L11 15L16 9" stroke="#F4F4F4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/> </svg>
              : <svg onClick={() => handleSelectingProductRequirements('websiteDesign', 'Website Design')} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <g clipPath="url(#clip0_616_435)"> <path d="M20 16.8V7.19995V7.19666C20 6.07875 20 5.51945 19.7822 5.09204C19.5905 4.71572 19.2841 4.40973 18.9078 4.21799C18.48 4 17.9203 4 16.8002 4H7.2002C6.08009 4 5.51962 4 5.0918 4.21799C4.71547 4.40973 4.40973 4.71572 4.21799 5.09204C4 5.51986 4 6.07985 4 7.19995V16.8C4 17.9201 4 18.4802 4.21799 18.908C4.40973 19.2844 4.71547 19.5902 5.0918 19.782C5.51962 20 6.08009 20 7.2002 20H16.8002C17.9203 20 18.48 20 18.9078 19.782C19.2841 19.5902 19.5905 19.2844 19.7822 18.908C20 18.4806 20 17.9212 20 16.8032V16.8Z" stroke="#1D1D1D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/> </g> <defs> <clipPath id="clip0_616_435"> <rect width="24" height="24" fill="white"/> </clipPath> </defs> </svg>
            }
            <p> Website deign </p>
        </div>
        <div className='productRequirementsOptionRow'>
            {userSelectedProducts.AIandLLMapplications === true
              ? <svg onClick={() => handleDeselectingProductRequirements('AIandLLMapplications', 'AI & LLM application')} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M20 16.8V7.19995V7.19666C20 6.07875 20 5.51945 19.7822 5.09204C19.5905 4.71572 19.2841 4.40973 18.9078 4.21799C18.48 4 17.9203 4 16.8002 4H7.2002C6.08009 4 5.51962 4 5.0918 4.21799C4.71547 4.40973 4.40973 4.71572 4.21799 5.09204C4 5.51986 4 6.07985 4 7.19995V16.8C4 17.9201 4 18.4802 4.21799 18.908C4.40973 19.2844 4.71547 19.5902 5.0918 19.782C5.51962 20 6.08009 20 7.2002 20H16.8002C17.9203 20 18.48 20 18.9078 19.782C19.2841 19.5902 19.5905 19.2844 19.7822 18.908C20 18.4806 20 17.9212 20 16.8032V16.8Z" fill="#131313" stroke="#131313" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/> <path d="M8 12L11 15L16 9" stroke="#F4F4F4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/> </svg>
              : <svg onClick={() => handleSelectingProductRequirements('AIandLLMapplications', 'AI & LLM application')} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <g clipPath="url(#clip0_616_435)"> <path d="M20 16.8V7.19995V7.19666C20 6.07875 20 5.51945 19.7822 5.09204C19.5905 4.71572 19.2841 4.40973 18.9078 4.21799C18.48 4 17.9203 4 16.8002 4H7.2002C6.08009 4 5.51962 4 5.0918 4.21799C4.71547 4.40973 4.40973 4.71572 4.21799 5.09204C4 5.51986 4 6.07985 4 7.19995V16.8C4 17.9201 4 18.4802 4.21799 18.908C4.40973 19.2844 4.71547 19.5902 5.0918 19.782C5.51962 20 6.08009 20 7.2002 20H16.8002C17.9203 20 18.48 20 18.9078 19.782C19.2841 19.5902 19.5905 19.2844 19.7822 18.908C20 18.4806 20 17.9212 20 16.8032V16.8Z" stroke="#1D1D1D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/> </g> <defs> <clipPath id="clip0_616_435"> <rect width="24" height="24" fill="white"/> </clipPath> </defs> </svg>
            }
            <p> AI & LLM application </p>
        </div>
        <div className='productRequirementsOptionRow'>
            {userSelectedProducts.appImplementation === true
              ? <svg onClick={() => handleDeselectingProductRequirements('appImplementation', 'App implementation')} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M20 16.8V7.19995V7.19666C20 6.07875 20 5.51945 19.7822 5.09204C19.5905 4.71572 19.2841 4.40973 18.9078 4.21799C18.48 4 17.9203 4 16.8002 4H7.2002C6.08009 4 5.51962 4 5.0918 4.21799C4.71547 4.40973 4.40973 4.71572 4.21799 5.09204C4 5.51986 4 6.07985 4 7.19995V16.8C4 17.9201 4 18.4802 4.21799 18.908C4.40973 19.2844 4.71547 19.5902 5.0918 19.782C5.51962 20 6.08009 20 7.2002 20H16.8002C17.9203 20 18.48 20 18.9078 19.782C19.2841 19.5902 19.5905 19.2844 19.7822 18.908C20 18.4806 20 17.9212 20 16.8032V16.8Z" fill="#131313" stroke="#131313" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/> <path d="M8 12L11 15L16 9" stroke="#F4F4F4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/> </svg>
              : <svg onClick={() => handleSelectingProductRequirements('appImplementation', 'App implementation')} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <g clipPath="url(#clip0_616_435)"> <path d="M20 16.8V7.19995V7.19666C20 6.07875 20 5.51945 19.7822 5.09204C19.5905 4.71572 19.2841 4.40973 18.9078 4.21799C18.48 4 17.9203 4 16.8002 4H7.2002C6.08009 4 5.51962 4 5.0918 4.21799C4.71547 4.40973 4.40973 4.71572 4.21799 5.09204C4 5.51986 4 6.07985 4 7.19995V16.8C4 17.9201 4 18.4802 4.21799 18.908C4.40973 19.2844 4.71547 19.5902 5.0918 19.782C5.51962 20 6.08009 20 7.2002 20H16.8002C17.9203 20 18.48 20 18.9078 19.782C19.2841 19.5902 19.5905 19.2844 19.7822 18.908C20 18.4806 20 17.9212 20 16.8032V16.8Z" stroke="#1D1D1D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/> </g> <defs> <clipPath id="clip0_616_435"> <rect width="24" height="24" fill="white"/> </clipPath> </defs> </svg>
            }
            <p> App implementation </p>
        </div>
        <div className='productRequirementsOptionRow'>
            {userSelectedProducts.other === true
              ? <svg onClick={() => handleDeselectingProductRequirements('other', 'Other')} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M20 16.8V7.19995V7.19666C20 6.07875 20 5.51945 19.7822 5.09204C19.5905 4.71572 19.2841 4.40973 18.9078 4.21799C18.48 4 17.9203 4 16.8002 4H7.2002C6.08009 4 5.51962 4 5.0918 4.21799C4.71547 4.40973 4.40973 4.71572 4.21799 5.09204C4 5.51986 4 6.07985 4 7.19995V16.8C4 17.9201 4 18.4802 4.21799 18.908C4.40973 19.2844 4.71547 19.5902 5.0918 19.782C5.51962 20 6.08009 20 7.2002 20H16.8002C17.9203 20 18.48 20 18.9078 19.782C19.2841 19.5902 19.5905 19.2844 19.7822 18.908C20 18.4806 20 17.9212 20 16.8032V16.8Z" fill="#131313" stroke="#131313" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/> <path d="M8 12L11 15L16 9" stroke="#F4F4F4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/> </svg>
              : <svg onClick={() => handleSelectingProductRequirements('other', 'Other')} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <g clipPath="url(#clip0_616_435)"> <path d="M20 16.8V7.19995V7.19666C20 6.07875 20 5.51945 19.7822 5.09204C19.5905 4.71572 19.2841 4.40973 18.9078 4.21799C18.48 4 17.9203 4 16.8002 4H7.2002C6.08009 4 5.51962 4 5.0918 4.21799C4.71547 4.40973 4.40973 4.71572 4.21799 5.09204C4 5.51986 4 6.07985 4 7.19995V16.8C4 17.9201 4 18.4802 4.21799 18.908C4.40973 19.2844 4.71547 19.5902 5.0918 19.782C5.51962 20 6.08009 20 7.2002 20H16.8002C17.9203 20 18.48 20 18.9078 19.782C19.2841 19.5902 19.5905 19.2844 19.7822 18.908C20 18.4806 20 17.9212 20 16.8032V16.8Z" stroke="#1D1D1D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/> </g> <defs> <clipPath id="clip0_616_435"> <rect width="24" height="24" fill="white"/> </clipPath> </defs> </svg>
            }
            <p> Other </p>
        </div>
      </div>
    </div>
  )
})

const Textarea: React.FC<TextareaProps> = React.memo(({ value, onClick, onChange }) => {
  return (
    <textarea
      id="userMessageTextarea"
      placeholder='Tell us something more about your project.'
      rows={4}
      value={value}
      onClick={onClick}
      onChange={onChange}
    />
  )
})

const SubmitButton: React.FC<SubmitButtonProps> = React.memo(({ handleFormSubmition }) => {
  return (
    <div className='submitButtonContainer'>
      <Button
        text='Submit'
        onClick={handleFormSubmition}
      />
    </div>
  )
})

export default ContentForm