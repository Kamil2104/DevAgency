import React, { createContext, useState, ReactNode } from 'react';

interface FormContextType {
    isFormDisplayed: boolean;
    setIsFormDisplayed: React.Dispatch<React.SetStateAction<boolean>>;
}

export const FormContext = createContext<FormContextType | undefined>(undefined);

export const FormProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isFormDisplayed, setIsFormDisplayed] = useState(false);

  return (
    <FormContext.Provider value={{ isFormDisplayed, setIsFormDisplayed }}>
      {children}
    </FormContext.Provider>
  );
};
