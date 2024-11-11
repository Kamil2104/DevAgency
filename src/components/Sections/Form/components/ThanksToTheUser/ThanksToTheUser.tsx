import React from 'react'

import { useNavigate } from 'react-router-dom'

import Background from '../Background/Background'
import Header from '../FormContent/components/Header'

import useFormContext from '../../../../../hooks/useFormContext'

import './ThanksToTheUser.css'

const ThanksToTheUser: React.FC = () => {
  return (
    <section className='thanksToTheUser'>
        <Background />
        <Header />
        <Content />
    </section>
  )
}

const Content = () => {
  const navigate = useNavigate()

  const { setIsFormDisplayed, setDisplayedFormContent } = useFormContext()

  const handleBackToHomepageButtonClick = () => {
    window.scrollTo(0, 0);
    navigate('/')
    setIsFormDisplayed(false)

    setTimeout(() => {
      setDisplayedFormContent('FormFields')
    }, 750)
  }

  const handleLinkedInIconClick = () => {
    window.open('https://www.linkedin.com/company/devagencyai/', '_blank')
  }

  return (
    <section className='thanksToTheUserContent'>
      <section className='thanksToTheUserContentMain'>
        <h1> Thanks for connecting! </h1>
        <h4>
          Thank you for taking the time to connect with us!
          Your message is in good hands, and a team member will reach out soon.
          In the meantime, feel free to explore our latest offerings and stay connected with us.
        </h4>
        <button onClick={() => handleBackToHomepageButtonClick()}> Back to homepage </button>
      </section>
      <section className='thanksToTheUserContentFooter'>
        <p> Get social with us </p>
        <section className='socialMediaIcons'>
          <svg onClick={() => handleLinkedInIconClick()} viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M5.25 2C4.07639 2 3.125 2.95139 3.125 4.125C3.125 5.2986 4.07639 6.25 5.25 6.25C6.4236 6.25 7.375 5.2986 7.375 4.125C7.375 2.95139 6.4236 2 5.25 2Z" fill="#5E71FE"/> <path d="M3.25 8C3.18096 8 3.125 8.05596 3.125 8.125V21.125C3.125 21.194 3.18096 21.25 3.25 21.25H7.25C7.31904 21.25 7.375 21.194 7.375 21.125V8.125C7.375 8.05596 7.31904 8 7.25 8H3.25Z" fill="#5E71FE"/> <path d="M9.75 8C9.68096 8 9.625 8.05596 9.625 8.125V21.125C9.625 21.194 9.68096 21.25 9.75 21.25H13.75C13.819 21.25 13.875 21.194 13.875 21.125V14.125C13.875 13.6277 14.0725 13.1508 14.4242 12.7992C14.7758 12.4475 15.2527 12.25 15.75 12.25C16.2473 12.25 16.7242 12.4475 17.0758 12.7992C17.4275 13.1508 17.625 13.6277 17.625 14.125V21.125C17.625 21.194 17.681 21.25 17.75 21.25H21.75C21.819 21.25 21.875 21.194 21.875 21.125V12.5052C21.875 10.0785 19.7644 8.17999 17.3498 8.3995C16.6052 8.46719 15.869 8.65231 15.1815 8.94694L13.875 9.50686V8.125C13.875 8.05596 13.819 8 13.75 8H9.75Z" fill="#5E71FE"/> </svg>
          <svg viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M15.2 3C13.9734 3 12.797 3.48728 11.9296 4.35463C11.0623 5.22199 10.575 6.39837 10.575 7.625V10.2H8.1C7.97574 10.2 7.875 10.3007 7.875 10.425V13.825C7.875 13.9493 7.97574 14.05 8.1 14.05H10.575V21.025C10.575 21.1493 10.6757 21.25 10.8 21.25H14.2C14.3243 21.25 14.425 21.1493 14.425 21.025V14.05H16.9219C17.0252 14.05 17.1152 13.9797 17.1402 13.8796L17.9902 10.4796C18.0257 10.3376 17.9183 10.2 17.7719 10.2H14.425V7.625C14.425 7.41946 14.5067 7.22233 14.652 7.07699C14.7973 6.93165 14.9945 6.85 15.2 6.85H17.8C17.9243 6.85 18.025 6.74926 18.025 6.625V3.225C18.025 3.10074 17.9243 3 17.8 3H15.2Z" fill="#5E71FE"/> </svg>
        </section>
      </section>
    </section>
  )
}

export default ThanksToTheUser