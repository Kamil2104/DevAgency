import React from 'react';

import HeaderHero from './HeaderHero/HeaderHero';
import Solomon from './Solomon/Solomon';
import Boosts from './Boosts/Boosts';
import AboutUs from './AboutUs/AboutUs';
import GetInTouch from './GetInTouch/GetInTouch';
import Footer from './Footer/Footer';
import Form from './Form/Form';

import { useFormContext } from '../../hooks/useFormContext';

const HomePage: React.FC = () => {
  const { isFormDisplayed } = useFormContext();

  return (
    <>
      {isFormDisplayed ? (
        <Form />
      ) : (
        <>
          <HeaderHero />
          <Solomon />
          <Boosts />
          <AboutUs />
          <GetInTouch />
          <Footer />
        </>
      )}
    </>
  );
};

export default HomePage;