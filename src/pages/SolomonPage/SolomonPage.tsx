import React, { Suspense, useEffect } from "react";

import useFormContext from "../../hooks/useFormContext";
import useFormVisibility from "../../hooks/useFormVisibility";

import Loader from "../../components/SmallComponents/Loader/Loader";

import HeaderHero from './HeaderHero/HeaderHero'
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
      <Suspense fallback={<Loader />}>
        <GetInTouch />
        <Footer />
      </Suspense>
      {isFormVisible && <Form isFormDisplayed={isFormDisplayed} />}
    </section>
  )
}

export default SolomonPage