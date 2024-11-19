import React from 'react'

import { OurServices } from './interfaces/interfaces'

import './styles/ServiceCreationAxis.css'

const ServiceCreationAxis: React.FC<{ activeService: number, setActiveService: (service: number) => void, ourServices: OurServices[] }> = ({ activeService, setActiveService, ourServices }) => {
  const arrowIcons: { [key: string]: JSX.Element } = {
    disabledUpArrow: <svg viewBox="0 0 13 21" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M11 19.5L2 10.5L11 1.5" stroke="#A1A1A1" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/> </svg>,
    enabledUpArrow: <svg viewBox="0 0 13 21" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M11 19.5L2 10.5L11 1.5" stroke="#F4F4F4" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/> </svg>,
    disabledDownArrow: <svg viewBox="0 0 13 21" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M2 1.5L11 10.5L2 19.5" stroke="#A1A1A1" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/> </svg>,
    enabledDownArrow: <svg viewBox="0 0 13 21" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M2 1.5L11 10.5L2 19.5" stroke="#EBEEFF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/> </svg>
  }

  return (
    <section className='serviceCreationAxis'>
      <section className='axis'>
        <div className={`downArrowButton ${activeService === 0 ? 'disabled' : ''}`} onClick={activeService !== 0 ? () => setActiveService(activeService - 1) : () => {}}>
          {activeService === 0 ? arrowIcons.disabledUpArrow : arrowIcons.enabledUpArrow}
        </div>

        <div className='servicesTimeLine'>
          <div className={
            `servicesTimeLineSegment ${activeService === 0 ? 'first' : activeService === 1 ? 'second' : activeService === 2 ? 'third' : 'fourth'}`
            }>
          </div>
        </div>

        <div className={`upArrowButton ${activeService === 3 ? 'disabled' : ''}`} onClick={activeService !== 3 ? () => setActiveService(activeService + 1) : () => {}}>
          {activeService === 3 ? arrowIcons.disabledDownArrow : arrowIcons.enabledDownArrow}
        </div>
      </section>
      <section className='servicesTimeLineDescription'>
        {ourServices.map((service) => (
          <Service key={service.text} activeIcon={service.activeIcon} unactiveIcon={service.unactiveIcon} text={service.text} isActive={service.isActive} onClick={service.onClick} />
        ))}
      </section>
    </section>
  )
}

const Service: React.FC<Partial<OurServices>> = ({ activeIcon, unactiveIcon, text, isActive, onClick }) => {
  return (
    <div className='service' onClick={onClick}>
      {isActive ? activeIcon : unactiveIcon}
      <p className={`${isActive ? 'active' : ''}`}> {text} </p>
    </div>
  )
}

export default ServiceCreationAxis