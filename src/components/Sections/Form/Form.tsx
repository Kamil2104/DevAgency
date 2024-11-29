import React from 'react';

import Background from './components/Background/Background';
import FormContent from './components/FormContent/FormContent';

import ThanksToTheUser from './components/ThanksToTheUser/ThanksToTheUser';

import useFormContext from '../../../hooks/useFormContext';

import './Form.css';

const Form: React.FC<{ isFormDisplayed: boolean }> = React.memo(({ isFormDisplayed }) => {
  const { displayedFormContent } = useFormContext()

  return (
    <section className={`form ${isFormDisplayed ? 'visible' : 'invisible'} full-screen`}>
      <Background displayedFormContent={displayedFormContent} />
      <FormContent displayedFormContent={displayedFormContent}/>
      {
        displayedFormContent === 'ThanksToTheUser'
          ? <ThanksToTheUser />
          : null
      }
    </section>
  );
});

export default Form;