import React from 'react'

import { CardProps } from '../interfaces/interfaces'
import { BoostCardProps } from '../interfaces/interfaces'

import './styles/Cards.css'

const Cards: React.FC<BoostCardProps> = ({ boostCards }) => {
  return (
    <section className="cards">
      {boostCards.map((boostCard) => (
        <Card key={boostCard.title} card={boostCard} />
      ))}
    </section>
  )
}

const Card: React.FC<CardProps> = ({ card }) => {
  return (
    <section className='card'>
      <section className='cardHeader'>
        <svg width="28" height="28" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 20.1758L12 3.17578M12 3.17578L5 10.4615M12 3.17578L19 10.4615" stroke="#F4F4F4" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <h4 className='cardPercent'> {card.percent}&nbsp; </h4>
        <h4 className='cardHeader'> {card.title} </h4>
      </section>
      <section className='cardDescription'>
        <p> {card.description} </p>
      </section>
    </section>
  )
}

export default Cards