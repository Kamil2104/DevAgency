import { useContext } from 'react';
import { ScrollProgressContext } from '../context/ScrollProgress';

const useScrollProgress = () => {
  const context = useContext(ScrollProgressContext);
  if (!context) {
    throw new Error("useScrollProgress must be used within a ScrollProgressProvider");
  }
  return context;
};

export default useScrollProgress