import React, { Suspense, useEffect } from 'react'

import useFormContext from '../../hooks/useFormContext'
import useFormVisibility from '../../hooks/useFormVisibility'

import HeaderHero from './HeaderHero/HeaderHero'
const Comparison = React.lazy(() => import('./Comparison/Comparison'))
const DataSafety = React.lazy(() => import('./DataSafety/DataSafety'))
const GetInTouch = React.lazy(() => import('../../components/Sections/GetInTouch/GetInTouch'))
const Footer = React.lazy(() => import('../../components/Sections/Footer/Footer'))
import Form from '../../components/Sections/Form/Form'

const SolomonPage: React.FC = () => {
  const { isFormDisplayed } = useFormContext();
  const { isFormVisible } = useFormVisibility();

  useEffect(() => {
    document.body.classList.remove('no-scroll');
  }, [])

  return (
    <section className='solomonPage'>
        <HeaderHero />
        <Suspense fallback={<div>Loading...</div>}>
          <Comparison />
          <DataSafety />
          <GetInTouch />
          <Footer />
        </Suspense>
        {isFormVisible && <Form isFormDisplayed={isFormDisplayed} />}
    </section>
  )
}

export default SolomonPage