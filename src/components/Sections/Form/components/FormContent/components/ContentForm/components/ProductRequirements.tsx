import React from 'react'

import { ProductRequirementsProps } from './interfaces/interfaces'

const ProductRequirements: React.FC<ProductRequirementsProps> = React.memo(({ userData, userSelectedProducts, isProductRequirementsSelectOpened, handleProductRequirementsSelectToggle, handleSelectingProductRequirements, handleDeselectingProductRequirements }) => {
  return (
    <section className='selectContainer'>
      <section onClick={() => handleProductRequirementsSelectToggle()} id={isProductRequirementsSelectOpened ? "productRequirementsOpened" : "productRequirementsClosed"} className='fullSizeInput'>
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
              ? <svg onClick={() => handleDeselectingProductRequirements('websiteDevelopment', 'Website Development')} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M20 16.8V7.19995V7.19666C20 6.07875 20 5.51945 19.7822 5.09204C19.5905 4.71572 19.2841 4.40973 18.9078 4.21799C18.48 4 17.9203 4 16.8002 4H7.2002C6.08009 4 5.51962 4 5.0918 4.21799C4.71547 4.40973 4.40973 4.71572 4.21799 5.09204C4 5.51986 4 6.07985 4 7.19995V16.8C4 17.9201 4 18.4802 4.21799 18.908C4.40973 19.2844 4.71547 19.5902 5.0918 19.782C5.51962 20 6.08009 20 7.2002 20H16.8002C17.9203 20 18.48 20 18.9078 19.782C19.2841 19.5902 19.5905 19.2844 19.7822 18.908C20 18.4806 20 17.9212 20 16.8032V16.8Z" fill="#131313" stroke="#131313" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/> <path d="M8 12L11 15L16 9" stroke="#F4F4F4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/> </svg>
              : <svg onClick={() => handleSelectingProductRequirements('websiteDevelopment', 'Website Development')} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <g clipPath="url(#clip0_616_435)"> <path d="M20 16.8V7.19995V7.19666C20 6.07875 20 5.51945 19.7822 5.09204C19.5905 4.71572 19.2841 4.40973 18.9078 4.21799C18.48 4 17.9203 4 16.8002 4H7.2002C6.08009 4 5.51962 4 5.0918 4.21799C4.71547 4.40973 4.40973 4.71572 4.21799 5.09204C4 5.51986 4 6.07985 4 7.19995V16.8C4 17.9201 4 18.4802 4.21799 18.908C4.40973 19.2844 4.71547 19.5902 5.0918 19.782C5.51962 20 6.08009 20 7.2002 20H16.8002C17.9203 20 18.48 20 18.9078 19.782C19.2841 19.5902 19.5905 19.2844 19.7822 18.908C20 18.4806 20 17.9212 20 16.8032V16.8Z" stroke="#1D1D1D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/> </g> <defs> <clipPath id="clip0_616_435"> <rect width="24" height="24" fill="white"/> </clipPath> </defs> </svg>
            }
            <p> Website development </p>
        </section>
        <section className='productRequirementsOptionRow'>
            {userSelectedProducts.websiteDesign === true
              ? <svg onClick={() => handleDeselectingProductRequirements('websiteDesign', 'Website Design')} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M20 16.8V7.19995V7.19666C20 6.07875 20 5.51945 19.7822 5.09204C19.5905 4.71572 19.2841 4.40973 18.9078 4.21799C18.48 4 17.9203 4 16.8002 4H7.2002C6.08009 4 5.51962 4 5.0918 4.21799C4.71547 4.40973 4.40973 4.71572 4.21799 5.09204C4 5.51986 4 6.07985 4 7.19995V16.8C4 17.9201 4 18.4802 4.21799 18.908C4.40973 19.2844 4.71547 19.5902 5.0918 19.782C5.51962 20 6.08009 20 7.2002 20H16.8002C17.9203 20 18.48 20 18.9078 19.782C19.2841 19.5902 19.5905 19.2844 19.7822 18.908C20 18.4806 20 17.9212 20 16.8032V16.8Z" fill="#131313" stroke="#131313" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/> <path d="M8 12L11 15L16 9" stroke="#F4F4F4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/> </svg>
              : <svg onClick={() => handleSelectingProductRequirements('websiteDesign', 'Website Design')} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <g clipPath="url(#clip0_616_435)"> <path d="M20 16.8V7.19995V7.19666C20 6.07875 20 5.51945 19.7822 5.09204C19.5905 4.71572 19.2841 4.40973 18.9078 4.21799C18.48 4 17.9203 4 16.8002 4H7.2002C6.08009 4 5.51962 4 5.0918 4.21799C4.71547 4.40973 4.40973 4.71572 4.21799 5.09204C4 5.51986 4 6.07985 4 7.19995V16.8C4 17.9201 4 18.4802 4.21799 18.908C4.40973 19.2844 4.71547 19.5902 5.0918 19.782C5.51962 20 6.08009 20 7.2002 20H16.8002C17.9203 20 18.48 20 18.9078 19.782C19.2841 19.5902 19.5905 19.2844 19.7822 18.908C20 18.4806 20 17.9212 20 16.8032V16.8Z" stroke="#1D1D1D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/> </g> <defs> <clipPath id="clip0_616_435"> <rect width="24" height="24" fill="white"/> </clipPath> </defs> </svg>
            }
            <p> Website deign </p>
        </section>
        <section className='productRequirementsOptionRow'>
            {userSelectedProducts.AIandLLMapplications === true
              ? <svg onClick={() => handleDeselectingProductRequirements('AIandLLMapplications', 'AI & LLM application')} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M20 16.8V7.19995V7.19666C20 6.07875 20 5.51945 19.7822 5.09204C19.5905 4.71572 19.2841 4.40973 18.9078 4.21799C18.48 4 17.9203 4 16.8002 4H7.2002C6.08009 4 5.51962 4 5.0918 4.21799C4.71547 4.40973 4.40973 4.71572 4.21799 5.09204C4 5.51986 4 6.07985 4 7.19995V16.8C4 17.9201 4 18.4802 4.21799 18.908C4.40973 19.2844 4.71547 19.5902 5.0918 19.782C5.51962 20 6.08009 20 7.2002 20H16.8002C17.9203 20 18.48 20 18.9078 19.782C19.2841 19.5902 19.5905 19.2844 19.7822 18.908C20 18.4806 20 17.9212 20 16.8032V16.8Z" fill="#131313" stroke="#131313" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/> <path d="M8 12L11 15L16 9" stroke="#F4F4F4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/> </svg>
              : <svg onClick={() => handleSelectingProductRequirements('AIandLLMapplications', 'AI & LLM application')} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <g clipPath="url(#clip0_616_435)"> <path d="M20 16.8V7.19995V7.19666C20 6.07875 20 5.51945 19.7822 5.09204C19.5905 4.71572 19.2841 4.40973 18.9078 4.21799C18.48 4 17.9203 4 16.8002 4H7.2002C6.08009 4 5.51962 4 5.0918 4.21799C4.71547 4.40973 4.40973 4.71572 4.21799 5.09204C4 5.51986 4 6.07985 4 7.19995V16.8C4 17.9201 4 18.4802 4.21799 18.908C4.40973 19.2844 4.71547 19.5902 5.0918 19.782C5.51962 20 6.08009 20 7.2002 20H16.8002C17.9203 20 18.48 20 18.9078 19.782C19.2841 19.5902 19.5905 19.2844 19.7822 18.908C20 18.4806 20 17.9212 20 16.8032V16.8Z" stroke="#1D1D1D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/> </g> <defs> <clipPath id="clip0_616_435"> <rect width="24" height="24" fill="white"/> </clipPath> </defs> </svg>
            }
            <p> AI & LLM application </p>
        </section>
        <section className='productRequirementsOptionRow'>
            {userSelectedProducts.appImplementation === true
              ? <svg onClick={() => handleDeselectingProductRequirements('appImplementation', 'App implementation')} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M20 16.8V7.19995V7.19666C20 6.07875 20 5.51945 19.7822 5.09204C19.5905 4.71572 19.2841 4.40973 18.9078 4.21799C18.48 4 17.9203 4 16.8002 4H7.2002C6.08009 4 5.51962 4 5.0918 4.21799C4.71547 4.40973 4.40973 4.71572 4.21799 5.09204C4 5.51986 4 6.07985 4 7.19995V16.8C4 17.9201 4 18.4802 4.21799 18.908C4.40973 19.2844 4.71547 19.5902 5.0918 19.782C5.51962 20 6.08009 20 7.2002 20H16.8002C17.9203 20 18.48 20 18.9078 19.782C19.2841 19.5902 19.5905 19.2844 19.7822 18.908C20 18.4806 20 17.9212 20 16.8032V16.8Z" fill="#131313" stroke="#131313" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/> <path d="M8 12L11 15L16 9" stroke="#F4F4F4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/> </svg>
              : <svg onClick={() => handleSelectingProductRequirements('appImplementation', 'App implementation')} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <g clipPath="url(#clip0_616_435)"> <path d="M20 16.8V7.19995V7.19666C20 6.07875 20 5.51945 19.7822 5.09204C19.5905 4.71572 19.2841 4.40973 18.9078 4.21799C18.48 4 17.9203 4 16.8002 4H7.2002C6.08009 4 5.51962 4 5.0918 4.21799C4.71547 4.40973 4.40973 4.71572 4.21799 5.09204C4 5.51986 4 6.07985 4 7.19995V16.8C4 17.9201 4 18.4802 4.21799 18.908C4.40973 19.2844 4.71547 19.5902 5.0918 19.782C5.51962 20 6.08009 20 7.2002 20H16.8002C17.9203 20 18.48 20 18.9078 19.782C19.2841 19.5902 19.5905 19.2844 19.7822 18.908C20 18.4806 20 17.9212 20 16.8032V16.8Z" stroke="#1D1D1D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/> </g> <defs> <clipPath id="clip0_616_435"> <rect width="24" height="24" fill="white"/> </clipPath> </defs> </svg>
            }
            <p> App implementation </p>
        </section>
        <section className='productRequirementsOptionRow'>
            {userSelectedProducts.other === true
              ? <svg onClick={() => handleDeselectingProductRequirements('other', 'Other')} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M20 16.8V7.19995V7.19666C20 6.07875 20 5.51945 19.7822 5.09204C19.5905 4.71572 19.2841 4.40973 18.9078 4.21799C18.48 4 17.9203 4 16.8002 4H7.2002C6.08009 4 5.51962 4 5.0918 4.21799C4.71547 4.40973 4.40973 4.71572 4.21799 5.09204C4 5.51986 4 6.07985 4 7.19995V16.8C4 17.9201 4 18.4802 4.21799 18.908C4.40973 19.2844 4.71547 19.5902 5.0918 19.782C5.51962 20 6.08009 20 7.2002 20H16.8002C17.9203 20 18.48 20 18.9078 19.782C19.2841 19.5902 19.5905 19.2844 19.7822 18.908C20 18.4806 20 17.9212 20 16.8032V16.8Z" fill="#131313" stroke="#131313" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/> <path d="M8 12L11 15L16 9" stroke="#F4F4F4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/> </svg>
              : <svg onClick={() => handleSelectingProductRequirements('other', 'Other')} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <g clipPath="url(#clip0_616_435)"> <path d="M20 16.8V7.19995V7.19666C20 6.07875 20 5.51945 19.7822 5.09204C19.5905 4.71572 19.2841 4.40973 18.9078 4.21799C18.48 4 17.9203 4 16.8002 4H7.2002C6.08009 4 5.51962 4 5.0918 4.21799C4.71547 4.40973 4.40973 4.71572 4.21799 5.09204C4 5.51986 4 6.07985 4 7.19995V16.8C4 17.9201 4 18.4802 4.21799 18.908C4.40973 19.2844 4.71547 19.5902 5.0918 19.782C5.51962 20 6.08009 20 7.2002 20H16.8002C17.9203 20 18.48 20 18.9078 19.782C19.2841 19.5902 19.5905 19.2844 19.7822 18.908C20 18.4806 20 17.9212 20 16.8032V16.8Z" stroke="#1D1D1D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/> </g> <defs> <clipPath id="clip0_616_435"> <rect width="24" height="24" fill="white"/> </clipPath> </defs> </svg>
                  }
            <p> Other </p>
        </section>
      </section>
    </section>
  )
})

export default ProductRequirements