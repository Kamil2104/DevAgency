import React from 'react'

import { PrivacyPolicyCheckboxProps } from './interfaces/interfaces'

import './styles/PrivacyPolicyCheckbox.css'

const PrivacyPolicyCheckbox: React.FC<PrivacyPolicyCheckboxProps> = React.memo(({ userData, setUserData, userDataErrors, setUserDataErrors }) => {
    return (
      <section className='privacyPolicyCheckboxContainer'>
          <section className='privacyPolicyCheckboxContainerContent'>
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
                    width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M20 16.8V7.19995V7.19666C20 6.07875 20 5.51945 19.7822 5.09204C19.5905 4.71572 19.2841 4.40973 18.9078 4.21799C18.48 4 17.9203 4 16.8002 4H7.2002C6.08009 4 5.51962 4 5.0918 4.21799C4.71547 4.40973 4.40973 4.71572 4.21799 5.09204C4 5.51986 4 6.07985 4 7.19995V16.8C4 17.9201 4 18.4802 4.21799 18.908C4.40973 19.2844 4.71547 19.5902 5.0918 19.782C5.51962 20 6.08009 20 7.2002 20H16.8002C17.9203 20 18.48 20 18.9078 19.782C19.2841 19.5902 19.5905 19.2844 19.7822 18.908C20 18.4806 20 17.9212 20 16.8032V16.8Z" stroke="#5E71FE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
              }
              <p> I agree to allow DevAgency to store and process my personal data in accordance with Centra&apos;s <span className='coloredParagraph'> privacy police* </span> </p>
          </section>
          <p className='errorMessage'> {userDataErrors.isPrivacyPolicyAgreementCheckedError} </p>
      </section>
    )
})

export default PrivacyPolicyCheckbox