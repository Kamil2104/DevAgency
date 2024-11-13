import React from 'react'

import './styles/ProductCreationAxis.css'

const ProductCreationAxis: React.FC<{ activeCard: number, setActiveCard: (card: number) => void }> = ({ activeCard, setActiveCard }) => {
  const cardAttributes: { value: number, description: string }[] = [
    { value: 0, description: 'We start by understanding your vision and goals.' },
    { value: 1, description: 'We start by understanding your vision and goals.' },
    { value: 2, description: 'We start by understanding your vision and goals.' },
    { value: 3, description: 'We start by understanding your vision and goals.' }
  ];

  const arrowIcons: { [key: string]: JSX.Element } = {
    disabledLeftArrow: <svg viewBox="0 0 13 21" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M11 19.5L2 10.5L11 1.5" stroke="#A1A1A1" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/> </svg>,
    enabledLeftArrow: <svg viewBox="0 0 13 21" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M11 19.5L2 10.5L11 1.5" stroke="#F4F4F4" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/> </svg>,
    disabledRightArrow: <svg viewBox="0 0 13 21" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M2 1.5L11 10.5L2 19.5" stroke="#A1A1A1" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/> </svg>,
    enabledRightArrow: <svg viewBox="0 0 13 21" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M2 1.5L11 10.5L2 19.5" stroke="#EBEEFF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/> </svg>
  }

  return (
    <section className='productCreationAxis'>
      <div className={`leftArrowButton ${activeCard === 0 ? 'disabled' : ''}`} onClick={activeCard !== 0 ? () => setActiveCard(activeCard - 1) : () => {}}>
        {activeCard === 0 ? arrowIcons.disabledLeftArrow : arrowIcons.enabledLeftArrow}
      </div>

      <div className='timeLine'></div>

      <div className={`rightArrowButton ${activeCard === 3 ? 'disabled' : ''}`} onClick={activeCard !== 3 ? () => setActiveCard(activeCard + 1) : () => {}}>
        {activeCard === 3 ? arrowIcons.disabledRightArrow : arrowIcons.enabledRightArrow}
      </div>

      <div className='timeLinePointsContainer'>
        {cardAttributes.map(attributes => (
          <TimeLinePoint key={attributes.value} activeCard={activeCard} setActiveCard={setActiveCard} cardValue={attributes.value} />
        ))}
      </div>

      <div className='timeLineDescriptionsContainer'>
        {cardAttributes.map(attributes => (
          <TimeLinePointDescription key={attributes.value} description={attributes.description} activeCard={activeCard} cardValue={attributes.value}/>
        ))}
      </div>
    </section>
  )
}

const TimeLinePoint: React.FC<{ activeCard: number, setActiveCard: (card: number) => void, cardValue: number}> = ({ activeCard, setActiveCard, cardValue }) => {
  return (
    <div className='stepSection'>
      <div className={`timeLinePoint ${activeCard === cardValue ? 'active' : ''}`} onClick={() => setActiveCard(cardValue)}></div>
    </div>
  )
}

const TimeLinePointDescription: React.FC<{ activeCard: number, description: string, cardValue: number }> = ({ activeCard, description, cardValue }) => {
  return (
    <div className={`timeLinePointDescription ${activeCard === cardValue ? '' : 'invisible'}`}> <p> {description} </p> </div>
  )
}

export default ProductCreationAxis