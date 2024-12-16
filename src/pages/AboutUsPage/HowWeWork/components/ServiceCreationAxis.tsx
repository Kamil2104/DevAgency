import React, { useState, useEffect } from 'react'

import { OurServices } from './interfaces/interfaces'

import useIsMobileView from '../../../../hooks/useIsMobileView'

import './styles/ServiceCreationAxis.css'

const ServiceCreationAxis: React.FC<{ activeService: number, setActiveService: (service: number) => void, ourServices: OurServices[] }> = React.memo(({ activeService, setActiveService, ourServices }) => {
  const { isMobileView } = useIsMobileView()

  const arrowIcons: { [key: string]: JSX.Element } = {
    disabledUpArrow: <svg viewBox="0 0 13 21" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M11 19.5L2 10.5L11 1.5" stroke="#A1A1A1" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/> </svg>,
    enabledUpArrow: <svg viewBox="0 0 13 21" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M11 19.5L2 10.5L11 1.5" stroke="#F4F4F4" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/> </svg>,
    disabledDownArrow: <svg viewBox="0 0 13 21" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M2 1.5L11 10.5L2 19.5" stroke="#A1A1A1" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/> </svg>,
    enabledDownArrow: <svg viewBox="0 0 13 21" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M2 1.5L11 10.5L2 19.5" stroke="#EBEEFF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/> </svg>
  }

  return (
    <div className='serviceCreationAxis'>
      <div className='axis'>
        {!isMobileView &&
          <div className={`downArrowButton ${activeService === 0 ? 'disabled' : ''}`} onClick={activeService !== 0 ? () => setActiveService(activeService - 1) : () => {}}>
            {activeService === 0 ? arrowIcons.disabledUpArrow : arrowIcons.enabledUpArrow}
          </div>
        }

        <div className='servicesTimeLine'>
          <div className={
            `servicesTimeLineSegment ${activeService === 0 ? 'first' : activeService === 1 ? 'second' : activeService === 2 ? 'third' : 'fourth'}`
            }>
          </div>
        </div>

        {!isMobileView &&
          <div className={`upArrowButton ${activeService === 3 ? 'disabled' : ''}`} onClick={activeService !== 3 ? () => setActiveService(activeService + 1) : () => {}}>
            {activeService === 3 ? arrowIcons.disabledDownArrow : arrowIcons.enabledDownArrow}
          </div>
        }
      </div>
      <div className='servicesTimeLineDescription'>
        {ourServices.map((service) => (
          <Service key={service.title} activeIcon={service.activeIcon} unactiveIcon={service.unactiveIcon} title={service.title} isActive={service.isActive} onClick={service.onClick} />
        ))}
      </div>
    </div>
  )
})

const Service: React.FC<Partial<OurServices>> = React.memo(({ activeIcon, unactiveIcon, title, isActive, onClick }) => {
  const { isMobileView } = useIsMobileView()

  const [delayedIsActive, setDelayedIsActive] = useState(isActive);

  useEffect(() => {
    if (isActive) {
      const timeout = setTimeout(() => {
        setDelayedIsActive(isActive);
      }, 300);

      return () => clearTimeout(timeout);
    } else {
      setDelayedIsActive(isActive);
    }
  }, [isActive]);

  return (
    <div className='service' onClick={onClick}>
      {delayedIsActive ? activeIcon : unactiveIcon}
      {!isMobileView && <p className={`${delayedIsActive ? 'active' : ''}`}> {title} </p> }
    </div>
  );
});

export default ServiceCreationAxis