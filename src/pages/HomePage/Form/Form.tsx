import React from 'react';

import Background from './components/Background/Background';
import FormContent from './components/FormContent/FormContent';

import './Form.css';

const Form: React.FC<{ isFormDisplayed: boolean }> = ({ isFormDisplayed }) => {
  return (
    <section className={`form ${isFormDisplayed ? 'visible' : 'invisible'} full-screen`}>
      <Background />
      <FormContent />
    </section>
  );
};

export default Form;