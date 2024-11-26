import { useState, useEffect } from 'react';
import useFormContext from './useFormContext';

const useFormVisibility = () => {
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
      }, 1000);
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

  return { isFormVisible };
};

export default useFormVisibility;