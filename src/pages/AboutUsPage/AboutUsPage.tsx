import React, { useState, useEffect, Suspense } from 'react'

import useFormContext from '../../hooks/useFormContext'

import HeaderHero from './HeaderHero/HeaderHero'
const WhyUs = React.lazy(() => import("./WhyUs/WhyUs"))
const HowWeWork = React.lazy(() => import("./HowWeWork/HowWeWork"))
const HowWeGetThingsDone = React.lazy(() => import("./HowWeGetThingsDone/HowWeGetThingsDone"))
const GetInTouch = React.lazy(() => import("../../components/Sections/GetInTouch/GetInTouch"))
const Footer = React.lazy(() => import("../../components/Sections/Footer/Footer"))
import Form from '../../components/Sections/Form/Form'

const AboutUsPage: React.FC = () => {
  const { isFormDisplayed } = useFormContext();

  const [isFormVisible, setIsFormVisible] = useState(isFormDisplayed);

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    if (isFormDisplayed) {
      setIsFormVisible(true);
      setTimeout(() => {
        document.body.classList.add('no-scroll');
      }, 1000)
    } else {
      const timer = setTimeout(() => {
        setIsFormVisible(false);
        document.body.classList.remove('no-scroll');
      }, 300);

      return () => clearTimeout(timer);
    }

    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, [isFormDisplayed]);

  return (
    <section className='aboutUsPage'>
      <HeaderHero />
      <Suspense fallback={<div>Loading...</div>}>
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