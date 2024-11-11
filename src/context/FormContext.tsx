import React, { createContext, useState, ReactNode } from 'react';

interface FormContextType {
    isFormDisplayed: boolean;
    setIsFormDisplayed: React.Dispatch<React.SetStateAction<boolean>>,
    displayedFormContent: string,
    setDisplayedFormContent: React.Dispatch<React.SetStateAction<string>>
}

export const FormContext = createContext<FormContextType | undefined>(undefined);

export const FormProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isFormDisplayed, setIsFormDisplayed] = useState(false);
  const [displayedFormContent, setDisplayedFormContent] = useState('FormFields');

  return (
    <FormContext.Provider value={{ isFormDisplayed, setIsFormDisplayed, displayedFormContent, setDisplayedFormContent }}>
      {children}
    </FormContext.Provider>
  );
};
