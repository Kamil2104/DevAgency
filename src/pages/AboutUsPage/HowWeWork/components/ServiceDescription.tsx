import React, { useState, useEffect } from 'react';

import useIsMobileView from '../../../../hooks/useIsMobileView';

import { OurServices } from './interfaces/interfaces';

import './styles/ServiceDescription.css';

const ServiceDescription: React.FC<Partial<OurServices>> = React.memo(({ steps, activeIcon, title }) => {
  const { isMobileView, windowWidth } = useIsMobileView()

  const [isExiting, setIsExiting] = useState(false);

  const [currentTitle, setCurrentTitle] = useState<string | undefined>(title);
  const [currentSteps, setCurrentSteps] = useState(steps);
  const [currentIcon, setCurrentIcon] = useState(activeIcon);

  useEffect(() => {
    setIsExiting(true);

    const timeout = setTimeout(() => {
      setCurrentSteps(steps);
      setCurrentIcon(activeIcon);
      setCurrentTitle(title)
      setIsExiting(false);
    }, 300);

    return () => clearTimeout(timeout);
  }, [steps, activeIcon, title]);

  return (
    <div className="serviceDescription">
      <div className="serviceDescriptionContent">
        <div className="leftColumn">
          {isMobileView ? <h4 className={isExiting ? 'exiting' : 'entering'}> {currentTitle} </h4> : <h4> Service includes </h4>}
          {currentSteps?.map((step, index) => (
            <StepPoint key={index} pointDescription={step} isExiting={isExiting} />
          ))}
        </div>
        {windowWidth > 1150 ?
          <div className="rightColumn">
            <div className={isExiting ? 'icon exiting' : 'icon entering'}>
              {currentIcon}
            </div>
          </div> : null
        }
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
