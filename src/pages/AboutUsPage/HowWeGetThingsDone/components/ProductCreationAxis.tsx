import React, { useState, useEffect } from 'react'

import useIsMobileView from '../../../../hooks/useIsMobileView';

import './styles/ProductCreationAxis.css'

const ProductCreationAxis: React.FC<{ activeCard: number, setActiveCard: (card: number) => void }> = React.memo(({ activeCard, setActiveCard }) => {
  const cardAttributes: { value: number, description: string }[] = [
    { value: 0, description: 'We start by understanding your vision and goals.' },
    { value: 1, description: 'But also the leap into electronic typesetting.' },
    { value: 2, description: 'It was popularised in the 1960s with the release.' },
    { value: 3, description: 'Lorem ipsum passages, and most recently' }
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
          <TimeLinePointDescription cardValue={cardAttributes[activeCard].value} description={cardAttributes[activeCard].description} />
      </div>
    </section>
  )
})

const TimeLinePoint: React.FC<{ activeCard: number, setActiveCard: (card: number) => void, cardValue: number}> = React.memo(({ activeCard, setActiveCard, cardValue }) => {
  return (
    <div className='stepSection'>
      <div className={`timeLinePoint ${activeCard === cardValue ? 'active' : ''}`} onClick={() => setActiveCard(cardValue)}></div>
    </div>
  )
})

const TimeLinePointDescription: React.FC<{ cardValue: number, description: string }> = React.memo(({ cardValue, description }) => {
  const { windowWidth } = useIsMobileView()

  const [isExiting, setIsExiting] = useState(false);
  const [currentDescription, setCurrentDescription] = useState(description);

  const timeLinePointDescriptionTranslation =
    windowWidth > 1450 ? 285 :
    windowWidth > 1150 ? 245 :
    windowWidth > 900 ? 185 :
    windowWidth > 768 ? 155
    : 0

  const finalTimeLinePointDescriptionTranslation =
    cardValue > 1 && windowWidth > 1450 ? timeLinePointDescriptionTranslation + 5 :
    cardValue === 2 && windowWidth > 768 && windowWidth < 900 ? timeLinePointDescriptionTranslation + 2 :
    cardValue === 3 && windowWidth > 768 && windowWidth < 900 ? timeLinePointDescriptionTranslation + 2.25
    : timeLinePointDescriptionTranslation

  useEffect(() => {
    setIsExiting(true);

    const timeout = setTimeout(() => {
      setIsExiting(false);
      setCurrentDescription(description);
    }, 300);

    return () => clearTimeout(timeout);
  }, [description]);

  return (
    <div
      className="timeLinePointDescription"
      style={{
        transform: `translateX(calc(${cardValue * finalTimeLinePointDescriptionTranslation}px))`,
      }}
    >
      <p className={`text ${isExiting ? 'exiting' : ''}`}>{currentDescription}</p>
      <p className={`text ${!isExiting ? 'entering' : ''}`}>{description}</p>
    </div>
  );
});


export default ProductCreationAxis