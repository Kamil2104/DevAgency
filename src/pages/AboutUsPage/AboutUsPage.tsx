import React, { Suspense } from 'react'

import useFormContext from '../../hooks/useFormContext'
import useFormVisibility from '../../hooks/useFormVisibility'

import Loader from '../../components/SmallComponents/Loader/Loader'

import HeaderHero from './HeaderHero/HeaderHero'
const WhyUs = React.lazy(() => import("./WhyUs/WhyUs"))
const HowWeWork = React.lazy(() => import("./HowWeWork/HowWeWork"))
const HowWeGetThingsDone = React.lazy(() => import("./HowWeGetThingsDone/HowWeGetThingsDone"))
const GetInTouch = React.lazy(() => import("../../components/Sections/GetInTouch/GetInTouch"))
const Footer = React.lazy(() => import("../../components/Sections/Footer/Footer"))
import Form from '../../components/Sections/Form/Form'

const AboutUsPage: React.FC = () => {
  const { isFormDisplayed } = useFormContext();
  const { isFormVisible } = useFormVisibility();

  return (
    <section className='aboutUsPage'>
      <HeaderHero />
      <Suspense fallback={<Loader />}>
        <WhyUs />
        <HowWeGetThingsDone />
        <HowWeWork />
        <GetInTouch />
        <Footer />
      </Suspense>
      {isFormVisible && <Form isFormDisplayed={isFormDisplayed} />}
    </section>
  )
}

export default AboutUsPage