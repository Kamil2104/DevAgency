import React, { useState, useEffect } from 'react';
import { OurServices } from './interfaces/interfaces';
import './styles/ServiceDescription.css';

const ServiceDescription: React.FC<Partial<OurServices>> = React.memo(({ steps, activeIcon }) => {
  const [isExiting, setIsExiting] = useState(false);
  const [currentSteps, setCurrentSteps] = useState(steps);
  const [currentIcon, setCurrentIcon] = useState(activeIcon);

  useEffect(() => {
    setIsExiting(true);

    const timeout = setTimeout(() => {
      setCurrentSteps(steps);
      setCurrentIcon(activeIcon);
      setIsExiting(false);
    }, 300);

    return () => clearTimeout(timeout);
  }, [steps, activeIcon]);

  return (
    <div className="serviceDescription">
      <div className="serviceDescriptionContent">
        <div className="leftColumn">
          <h4>Service includes</h4>
          {currentSteps?.map((step, index) => (
            <StepPoint key={index} pointDescription={step} isExiting={isExiting} />
          ))}
        </div>
        <div className="rightColumn">
          <div className={isExiting ? 'icon exiting' : 'icon entering'}>
            {currentIcon}
          </div>
        </div>
      </div>
    </div>
  );
});

const StepPoint: React.FC<{ pointDescription: string, isExiting: boolean }> = React.memo(({ pointDescription, isExiting }) => {
  return (
    <div className="stepPoint">
      <svg className="stepPoint" width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="10.5" cy="10" r="10" fill="#5E71FE" />
      </svg>
      <p className={isExiting ? 'exiting' : 'entering'}>{pointDescription}</p>
    </div>
  );
});

export default ServiceDescription;
