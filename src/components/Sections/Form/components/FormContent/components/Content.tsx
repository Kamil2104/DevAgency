import React, { useState, useEffect } from 'react'

import Button from '../../../../../../components/SmallComponents/Button/Button'

import useFormUserData from './hooks/useFormUserData'
import useFormUserDataErrors from './hooks/useFormUserDataErrors'
import useFormUserSelectedProducts from './hooks/useFormUserSelectedProducts'

import { UserData } from './hooks/useFormUserData'
import { UserDataErrors } from './hooks/useFormUserDataErrors'
import { UserDataSelectedProducts } from './hooks/useFormUserSelectedProducts'

import { validateFormUserData } from './validation/validateFormUserData'

import './styles/Content.css'

const Content: React.FC = () => {
  const { userData, setUserData } = useFormUserData()
  const { userDataErrors, setUserDataErrors } = useFormUserDataErrors()
  const { userSelectedProducts, setUserSelectedProducts } = useFormUserSelectedProducts()

  return (
    <section className='rightColumnContent'>
      <ContentHeading />
      <ContentDescription />
      <ContentForm
        userData={userData}
        setUserData={setUserData}
        userDataErrors={userDataErrors}
        setUserDataErrors={setUserDataErrors}
        userSelectedProducts={userSelectedProducts}
        setUserSelectedProducts={setUserSelectedProducts}
      />
    </section>
  )
}

const ContentHeading: React.FC = () => {
  return (
    <h2> Your AI Transformation starts Here </h2>
  )
}

const ContentDescription: React.FC = () => {
  return (
    <h3> Fill in your details and DevAgency representative will give you a quick response. </h3>
  )
}

const ContentForm: React.FC<{
  userData: UserData, setUserData: React.Dispatch<React.SetStateAction<UserData>>,
  userDataErrors: UserDataErrors, setUserDataErrors: React.Dispatch<React.SetStateAction<UserDataErrors>>,
  userSelectedProducts: UserDataSelectedProducts, setUserSelectedProducts: React.Dispatch<React.SetStateAction<UserDataSelectedProducts>>}> = ({ userData, setUserData, userDataErrors, setUserDataErrors, userSelectedProducts, setUserSelectedProducts }) => {

  const [isProductRequirementsSelectOpened, setIsProductRequirementsSelectOpened] = useState(false)

  const handleProductRequirementsSelectToggle = () => {
    setIsProductRequirementsSelectOpened(!isProductRequirementsSelectOpened)
  }

  const handleClosingProductRequirementsSelect = () => {
    if (isProductRequirementsSelectOpened) {
      setIsProductRequirementsSelectOpened(false)
    }
  }

  const handleFormSubmition = () => {
    validateFormUserData(userData, setUserDataErrors)
    handleClosingProductRequirementsSelect()
  }

  return (
    <>
      <section className='contentForm'>
        <section className='row'>
            <section className='halfSizeInput'>
                <input
                  id="firstNameInput"
                  type='text'
                  placeholder='First name*'
                  value={userData.firstName}
                  onClick={() => handleClosingProductRequirementsSelect()}
                  onChange={(e) => {
                    setUserData({ ...userData, firstName: e.target.value })
                    setUserDataErrors({...userDataErrors, firstNameError: '' })
                  }}
                />
                <p className='errorMessage'> {userDataErrors.firstNameError} </p>
            </section>

            <section className='halfSizeInput'>
                <input
                  id="secondNameInput"
                  type='text'
                  placeholder='Second name*'
                  value={userData.secondName}
                  onClick={() => handleClosingProductRequirementsSelect()}
                  onChange={(e) => {
                    setUserData({ ...userData, secondName: e.target.value })
                    setUserDataErrors({...userDataErrors, secondNameError: '' })
                }}
                />
                <p className='errorMessage'> {userDataErrors.secondNameError} </p>
            </section>
        </section>

        <section className='fullSizeInput'>
            <input
              id="companyNameInput"
              type='text'
              placeholder='Company name*'
              value={userData.companyName}
              onClick={() => handleClosingProductRequirementsSelect()}
              onChange={(e) => {
                setUserData({ ...userData, companyName: e.target.value })
                setUserDataErrors({...userDataErrors, companyNameError: '' })
              }}
            />
            <p className='errorMessage'> {userDataErrors.companyNameError} </p>
        </section>

        <section className='fullSizeInput'>
            <input
              id="businessEmailInput"
              type='text'
              placeholder='Business e-mail*'
              value={userData.businessEmail}
              onClick={() => handleClosingProductRequirementsSelect()}
              onChange={(e) => {
                setUserData({ ...userData, businessEmail: e.target.value })
                setUserDataErrors({...userDataErrors, businessEmailError: '' })
              }}
            />
            <p className='errorMessage'> {userDataErrors.businessEmailError} </p>
        </section>

        <section className='row'>
            <section className='selectContainer'>
            <section onClick={() => handleProductRequirementsSelectToggle()} id={isProductRequirementsSelectOpened ? "productRequirementsOpened" : "productRequirementsClosed"} className='halfSizeInput'>

                    {userData.productRequirements.length > 0
                      ? <p className='selectedProductRequirementsOptions'> {userData.productRequirements.join(", ")} </p>
                      : <p className='selectedProductRequirementsOptionsPlaceholder'> Product requirements </p>
                    }

                    <section className='iconContainer'>
                      {isProductRequirementsSelectOpened
                        ? <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18 9L12 15L6 9" stroke="#131313" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        : <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 15.5L12 9.5L18 15.5" stroke="#F6F6F6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                      }
                    </section>
                </section>
                <section className={`productRequirementsOptions ${isProductRequirementsSelectOpened ? "open" : "closed"}`}>
                    <section className='productRequirementsOptionRow'>
                        {userSelectedProducts.websiteDevelopment === true
                          ? <svg onClick={() => {
                            setUserSelectedProducts({...userSelectedProducts, websiteDevelopment: false})
                            setUserData((prevUserData) => ({
                              ...prevUserData,
                              productRequirements: prevUserData.productRequirements.filter(requirement => requirement !== "Website Development")
                            }));
                          }} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M20 16.8V7.19995V7.19666C20 6.07875 20 5.51945 19.7822 5.09204C19.5905 4.71572 19.2841 4.40973 18.9078 4.21799C18.48 4 17.9203 4 16.8002 4H7.2002C6.08009 4 5.51962 4 5.0918 4.21799C4.71547 4.40973 4.40973 4.71572 4.21799 5.09204C4 5.51986 4 6.07985 4 7.19995V16.8C4 17.9201 4 18.4802 4.21799 18.908C4.40973 19.2844 4.71547 19.5902 5.0918 19.782C5.51962 20 6.08009 20 7.2002 20H16.8002C17.9203 20 18.48 20 18.9078 19.782C19.2841 19.5902 19.5905 19.2844 19.7822 18.908C20 18.4806 20 17.9212 20 16.8032V16.8Z" fill="#131313" stroke="#131313" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/> <path d="M8 12L11 15L16 9" stroke="#F4F4F4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/> </svg>
                          : <svg onClick={() => {
                            setUserSelectedProducts({...userSelectedProducts, websiteDevelopment: true})
                            setUserData({
                              ...userData,
                              productRequirements: [...userData.productRequirements, "Website Development"],
                            });
                          }} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <g clipPath="url(#clip0_616_435)"> <path d="M20 16.8V7.19995V7.19666C20 6.07875 20 5.51945 19.7822 5.09204C19.5905 4.71572 19.2841 4.40973 18.9078 4.21799C18.48 4 17.9203 4 16.8002 4H7.2002C6.08009 4 5.51962 4 5.0918 4.21799C4.71547 4.40973 4.40973 4.71572 4.21799 5.09204C4 5.51986 4 6.07985 4 7.19995V16.8C4 17.9201 4 18.4802 4.21799 18.908C4.40973 19.2844 4.71547 19.5902 5.0918 19.782C5.51962 20 6.08009 20 7.2002 20H16.8002C17.9203 20 18.48 20 18.9078 19.782C19.2841 19.5902 19.5905 19.2844 19.7822 18.908C20 18.4806 20 17.9212 20 16.8032V16.8Z" stroke="#1D1D1D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/> </g> <defs> <clipPath id="clip0_616_435"> <rect width="24" height="24" fill="white"/> </clipPath> </defs> </svg>
                        }
                        <p> Website development </p>
                    </section>
                    <section className='productRequirementsOptionRow'>
                        {userSelectedProducts.websiteDesign === true
                          ? <svg onClick={() => {
                            setUserSelectedProducts({...userSelectedProducts, websiteDesign: false})
                            setUserData((prevUserData) => ({
                              ...prevUserData,
                              productRequirements: prevUserData.productRequirements.filter(requirement => requirement !== "Website Design")
                            }));
                          }} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M20 16.8V7.19995V7.19666C20 6.07875 20 5.51945 19.7822 5.09204C19.5905 4.71572 19.2841 4.40973 18.9078 4.21799C18.48 4 17.9203 4 16.8002 4H7.2002C6.08009 4 5.51962 4 5.0918 4.21799C4.71547 4.40973 4.40973 4.71572 4.21799 5.09204C4 5.51986 4 6.07985 4 7.19995V16.8C4 17.9201 4 18.4802 4.21799 18.908C4.40973 19.2844 4.71547 19.5902 5.0918 19.782C5.51962 20 6.08009 20 7.2002 20H16.8002C17.9203 20 18.48 20 18.9078 19.782C19.2841 19.5902 19.5905 19.2844 19.7822 18.908C20 18.4806 20 17.9212 20 16.8032V16.8Z" fill="#131313" stroke="#131313" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/> <path d="M8 12L11 15L16 9" stroke="#F4F4F4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/> </svg>
                          : <svg onClick={() => {
                            setUserSelectedProducts({...userSelectedProducts, websiteDesign: true})
                            setUserData({
                              ...userData,
                              productRequirements: [...userData.productRequirements, "Website Design"],
                            });
                          }} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <g clipPath="url(#clip0_616_435)"> <path d="M20 16.8V7.19995V7.19666C20 6.07875 20 5.51945 19.7822 5.09204C19.5905 4.71572 19.2841 4.40973 18.9078 4.21799C18.48 4 17.9203 4 16.8002 4H7.2002C6.08009 4 5.51962 4 5.0918 4.21799C4.71547 4.40973 4.40973 4.71572 4.21799 5.09204C4 5.51986 4 6.07985 4 7.19995V16.8C4 17.9201 4 18.4802 4.21799 18.908C4.40973 19.2844 4.71547 19.5902 5.0918 19.782C5.51962 20 6.08009 20 7.2002 20H16.8002C17.9203 20 18.48 20 18.9078 19.782C19.2841 19.5902 19.5905 19.2844 19.7822 18.908C20 18.4806 20 17.9212 20 16.8032V16.8Z" stroke="#1D1D1D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/> </g> <defs> <clipPath id="clip0_616_435"> <rect width="24" height="24" fill="white"/> </clipPath> </defs> </svg>
                        }
                        <p> Website deign </p>
                    </section>
                    <section className='productRequirementsOptionRow'>
                        {userSelectedProducts.AIandLLMapplications === true
                          ? <svg onClick={() => {
                            setUserSelectedProducts({...userSelectedProducts, AIandLLMapplications: false})
                            setUserData((prevUserData) => ({
                              ...prevUserData,
                              productRequirements: prevUserData.productRequirements.filter(requirement => requirement !== "AI & LLM application")
                            }));
                          }} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M20 16.8V7.19995V7.19666C20 6.07875 20 5.51945 19.7822 5.09204C19.5905 4.71572 19.2841 4.40973 18.9078 4.21799C18.48 4 17.9203 4 16.8002 4H7.2002C6.08009 4 5.51962 4 5.0918 4.21799C4.71547 4.40973 4.40973 4.71572 4.21799 5.09204C4 5.51986 4 6.07985 4 7.19995V16.8C4 17.9201 4 18.4802 4.21799 18.908C4.40973 19.2844 4.71547 19.5902 5.0918 19.782C5.51962 20 6.08009 20 7.2002 20H16.8002C17.9203 20 18.48 20 18.9078 19.782C19.2841 19.5902 19.5905 19.2844 19.7822 18.908C20 18.4806 20 17.9212 20 16.8032V16.8Z" fill="#131313" stroke="#131313" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/> <path d="M8 12L11 15L16 9" stroke="#F4F4F4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/> </svg>
                          : <svg onClick={() => {
                            setUserSelectedProducts({...userSelectedProducts, AIandLLMapplications: true})
                            setUserData({
                              ...userData,
                              productRequirements: [...userData.productRequirements, "AI & LLM application"],
                            });
                          }} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <g clipPath="url(#clip0_616_435)"> <path d="M20 16.8V7.19995V7.19666C20 6.07875 20 5.51945 19.7822 5.09204C19.5905 4.71572 19.2841 4.40973 18.9078 4.21799C18.48 4 17.9203 4 16.8002 4H7.2002C6.08009 4 5.51962 4 5.0918 4.21799C4.71547 4.40973 4.40973 4.71572 4.21799 5.09204C4 5.51986 4 6.07985 4 7.19995V16.8C4 17.9201 4 18.4802 4.21799 18.908C4.40973 19.2844 4.71547 19.5902 5.0918 19.782C5.51962 20 6.08009 20 7.2002 20H16.8002C17.9203 20 18.48 20 18.9078 19.782C19.2841 19.5902 19.5905 19.2844 19.7822 18.908C20 18.4806 20 17.9212 20 16.8032V16.8Z" stroke="#1D1D1D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/> </g> <defs> <clipPath id="clip0_616_435"> <rect width="24" height="24" fill="white"/> </clipPath> </defs> </svg>
                        }
                        <p> AI & LLM application </p>
                    </section>
                    <section className='productRequirementsOptionRow'>
                        {userSelectedProducts.appImplementation === true
                          ? <svg onClick={() => {
                            setUserSelectedProducts({...userSelectedProducts, appImplementation: false})
                            setUserData((prevUserData) => ({
                              ...prevUserData,
                              productRequirements: prevUserData.productRequirements.filter(requirement => requirement !== "App implementation")
                            }));
                          }} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M20 16.8V7.19995V7.19666C20 6.07875 20 5.51945 19.7822 5.09204C19.5905 4.71572 19.2841 4.40973 18.9078 4.21799C18.48 4 17.9203 4 16.8002 4H7.2002C6.08009 4 5.51962 4 5.0918 4.21799C4.71547 4.40973 4.40973 4.71572 4.21799 5.09204C4 5.51986 4 6.07985 4 7.19995V16.8C4 17.9201 4 18.4802 4.21799 18.908C4.40973 19.2844 4.71547 19.5902 5.0918 19.782C5.51962 20 6.08009 20 7.2002 20H16.8002C17.9203 20 18.48 20 18.9078 19.782C19.2841 19.5902 19.5905 19.2844 19.7822 18.908C20 18.4806 20 17.9212 20 16.8032V16.8Z" fill="#131313" stroke="#131313" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/> <path d="M8 12L11 15L16 9" stroke="#F4F4F4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/> </svg>
                          : <svg onClick={() => {
                            setUserSelectedProducts({...userSelectedProducts, appImplementation: true})
                            setUserData({
                              ...userData,
                              productRequirements: [...userData.productRequirements, "App implementation"],
                            });
                          }} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <g clipPath="url(#clip0_616_435)"> <path d="M20 16.8V7.19995V7.19666C20 6.07875 20 5.51945 19.7822 5.09204C19.5905 4.71572 19.2841 4.40973 18.9078 4.21799C18.48 4 17.9203 4 16.8002 4H7.2002C6.08009 4 5.51962 4 5.0918 4.21799C4.71547 4.40973 4.40973 4.71572 4.21799 5.09204C4 5.51986 4 6.07985 4 7.19995V16.8C4 17.9201 4 18.4802 4.21799 18.908C4.40973 19.2844 4.71547 19.5902 5.0918 19.782C5.51962 20 6.08009 20 7.2002 20H16.8002C17.9203 20 18.48 20 18.9078 19.782C19.2841 19.5902 19.5905 19.2844 19.7822 18.908C20 18.4806 20 17.9212 20 16.8032V16.8Z" stroke="#1D1D1D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/> </g> <defs> <clipPath id="clip0_616_435"> <rect width="24" height="24" fill="white"/> </clipPath> </defs> </svg>
                        }
                        <p> App implementation </p>
                    </section>
                    <section className='productRequirementsOptionRow'>
                        {userSelectedProducts.other === true
                          ? <svg onClick={() => {
                            setUserSelectedProducts({...userSelectedProducts, other: false})
                            setUserData((prevUserData) => ({
                              ...prevUserData,
                              productRequirements: prevUserData.productRequirements.filter(requirement => requirement !== "Other")
                            }));
                          }} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M20 16.8V7.19995V7.19666C20 6.07875 20 5.51945 19.7822 5.09204C19.5905 4.71572 19.2841 4.40973 18.9078 4.21799C18.48 4 17.9203 4 16.8002 4H7.2002C6.08009 4 5.51962 4 5.0918 4.21799C4.71547 4.40973 4.40973 4.71572 4.21799 5.09204C4 5.51986 4 6.07985 4 7.19995V16.8C4 17.9201 4 18.4802 4.21799 18.908C4.40973 19.2844 4.71547 19.5902 5.0918 19.782C5.51962 20 6.08009 20 7.2002 20H16.8002C17.9203 20 18.48 20 18.9078 19.782C19.2841 19.5902 19.5905 19.2844 19.7822 18.908C20 18.4806 20 17.9212 20 16.8032V16.8Z" fill="#131313" stroke="#131313" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/> <path d="M8 12L11 15L16 9" stroke="#F4F4F4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/> </svg>
                          : <svg onClick={() => {
                            setUserSelectedProducts({...userSelectedProducts, other: true})
                            setUserData({
                              ...userData,
                              productRequirements: [...userData.productRequirements, "Other"],
                            });
                          }} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <g clipPath="url(#clip0_616_435)"> <path d="M20 16.8V7.19995V7.19666C20 6.07875 20 5.51945 19.7822 5.09204C19.5905 4.71572 19.2841 4.40973 18.9078 4.21799C18.48 4 17.9203 4 16.8002 4H7.2002C6.08009 4 5.51962 4 5.0918 4.21799C4.71547 4.40973 4.40973 4.71572 4.21799 5.09204C4 5.51986 4 6.07985 4 7.19995V16.8C4 17.9201 4 18.4802 4.21799 18.908C4.40973 19.2844 4.71547 19.5902 5.0918 19.782C5.51962 20 6.08009 20 7.2002 20H16.8002C17.9203 20 18.48 20 18.9078 19.782C19.2841 19.5902 19.5905 19.2844 19.7822 18.908C20 18.4806 20 17.9212 20 16.8032V16.8Z" stroke="#1D1D1D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/> </g> <defs> <clipPath id="clip0_616_435"> <rect width="24" height="24" fill="white"/> </clipPath> </defs> </svg>
                        }
                        <p> Other </p>
                    </section>
                </section>
            </section>

            <section className='halfSizeInput'>
                <input
                  id="phoneNumberInput"
                  type='text'
                  placeholder='+48*'
                  value={userData.phoneNumber}
                  onClick={() => handleClosingProductRequirementsSelect()}
                  onChange={(e) => {
                    setUserData({ ...userData, phoneNumber: e.target.value })
                    setUserDataErrors({...userDataErrors, phoneNumberError: '' })
                  }}
                />
                <p className='errorMessage'> {userDataErrors.phoneNumberError} </p>
            </section>
        </section>

        <textarea
          id="userMessageTextarea"
          placeholder='Tell us something more about your project.'
          rows={4} value={userData.message}
          onClick={() => handleClosingProductRequirementsSelect()}
          onChange={(e) => setUserData({ ...userData, message: e.target.value })}
        />
      </section>
      <PrivacyPolicyCheckbox userData={userData} setUserData={setUserData} userDataErrors={userDataErrors} setUserDataErrors={setUserDataErrors}/>
      <SubmitButton handleFormSubmition={handleFormSubmition} />
    </>
  )
}

const PrivacyPolicyCheckbox: React.FC<{ userData: UserData, setUserData: React.Dispatch<React.SetStateAction<UserData>>, userDataErrors: UserDataErrors, setUserDataErrors: React.Dispatch<React.SetStateAction<UserDataErrors>>}> = ({ userData, setUserData, userDataErrors, setUserDataErrors }) => {
  useEffect(() => {
    console.log(userData.isPrivacyPolicyAgreementChecked)
  }, [userData])

  return (
    <section className='privacyPolicyCheckboxContainer'>
      {userData.isPrivacyPolicyAgreementChecked
        ?
          <svg
            onClick={() => {
              setUserData({ ...userData, isPrivacyPolicyAgreementChecked: false })
              setUserDataErrors({...userDataErrors, isPrivacyPolicyAgreementCheckedError: '' })
            }}
            width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M20 16.8V7.19995V7.19666C20 6.07875 20 5.51945 19.7822 5.09204C19.5905 4.71572 19.2841 4.40973 18.9078 4.21799C18.48 4 17.9203 4 16.8002 4H7.2002C6.08009 4 5.51962 4 5.0918 4.21799C4.71547 4.40973 4.40973 4.71572 4.21799 5.09204C4 5.51986 4 6.07985 4 7.19995V16.8C4 17.9201 4 18.4802 4.21799 18.908C4.40973 19.2844 4.71547 19.5902 5.0918 19.782C5.51962 20 6.08009 20 7.2002 20H16.8002C17.9203 20 18.48 20 18.9078 19.782C19.2841 19.5902 19.5905 19.2844 19.7822 18.908C20 18.4806 20 17.9212 20 16.8032V16.8Z" fill="#5E71FE" stroke="#5E71FE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/> <path d="M8 12L11 15L16 9" stroke="#F4F4F4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        :
          <svg
            onClick={() => setUserData({ ...userData, isPrivacyPolicyAgreementChecked: true })}
            width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M20 16.8V7.19995V7.19666C20 6.07875 20 5.51945 19.7822 5.09204C19.5905 4.71572 19.2841 4.40973 18.9078 4.21799C18.48 4 17.9203 4 16.8002 4H7.2002C6.08009 4 5.51962 4 5.0918 4.21799C4.71547 4.40973 4.40973 4.71572 4.21799 5.09204C4 5.51986 4 6.07985 4 7.19995V16.8C4 17.9201 4 18.4802 4.21799 18.908C4.40973 19.2844 4.71547 19.5902 5.0918 19.782C5.51962 20 6.08009 20 7.2002 20H16.8002C17.9203 20 18.48 20 18.9078 19.782C19.2841 19.5902 19.5905 19.2844 19.7822 18.908C20 18.4806 20 17.9212 20 16.8032V16.8Z" stroke="#5E71FE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
      }
      <p> I agree to allow DevAgency to store and process my personal data in accordance with Centra&apos;s <span className='coloredParagraph'> privacy police* </span> </p>
    </section>
  )
}

const SubmitButton: React.FC<{ handleFormSubmition: () => void }> = ({ handleFormSubmition }) => {
  return (
    <section className='submitButtonContainer'>
      <Button
        text='Submit'
        stroke='#1D1D1D'
        onClick={handleFormSubmition}
      />
    </section>
  )
}

export default Content