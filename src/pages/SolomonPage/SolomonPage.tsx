import React, { Suspense, useEffect } from 'react'

import useFormContext from '../../hooks/useFormContext'
import useFormVisibility from '../../hooks/useFormVisibility'

import HeaderHero from './HeaderHero/HeaderHero'
const LegalEfficiency = React.lazy(() => import('./LegalEfficiency/LegalEfficiency'))
const DataSafety = React.lazy(() => import('./DataSafety/DataSafety'))
const AddingContext = React.lazy(() => import('./AddingContext/AddingContext'))
const Comparison = React.lazy(() => import('./Comparison/Comparison'))
const IntuitiveDesign = React.lazy(() => import('./IntuitiveDesign/IntuitiveDesign'))
const GetInTouch = React.lazy(() => import('../../components/Sections/GetInTouch/GetInTouch'))
const Footer = React.lazy(() => import('../../components/Sections/Footer/Footer'))
import Form from '../../components/Sections/Form/Form'

import Loader from "../../components/SmallComponents/Loader/Loader";

const SolomonPage: React.FC = () => {
  const { isFormDisplayed } = useFormContext();
  const { isFormVisible } = useFormVisibility();

  useEffect(() => {
    document.body.classList.remove('no-scroll');
  }, [])

  return (
    <section className='solomonPage'>
      <HeaderHero />
      <Suspense fallback={<Loader />}>
        <LegalEfficiency />
        <DataSafety />
        <AddingContext />
        <Comparison />
        <IntuitiveDesign />
        <GetInTouch />
        <Footer />
      </Suspense>
      {isFormVisible && <Form isFormDisplayed={isFormDisplayed} />}
    </section>
  )
}

export default SolomonPage