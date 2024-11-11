import React, { useState, useEffect } from 'react'

import useFormContext from '../../hooks/useFormContext'

import HeaderHero from './HeaderHero/HeaderHero'
import WhyUs from './WhyUs/WhyUs'
import GetInTouch from '../../components/Sections/GetInTouch/GetInTouch'
import Footer from '../../components/Sections/Footer/Footer'
import Form from '../../components/Sections/Form/Form'

const AboutUsPage: React.FC = () => {
  const { isFormDisplayed } = useFormContext();

  const [isFormVisible, setIsFormVisible] = useState(isFormDisplayed);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
    <>
      <HeaderHero />
      <WhyUs />
      <GetInTouch />
      <Footer />
      {isFormVisible && <Form isFormDisplayed={isFormDisplayed} />}
    </>
  )
}

export default AboutUsPage