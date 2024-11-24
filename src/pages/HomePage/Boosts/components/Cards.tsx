import React, { useEffect, useState, useRef } from 'react'

import { CardProps } from '../interfaces/interfaces'
import { BoostCardProps } from '../interfaces/interfaces'

import './styles/Cards.css'

const Cards: React.FC<BoostCardProps> = React.memo(({ boostCards }) => {
  const [isVisible, setIsVisible] = useState(false)
  const cardsRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )

    if (cardsRef.current) {
      observer.observe(cardsRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section className="cards" ref={cardsRef}>
      {boostCards.map((boostCard) => (
        <Card key={boostCard.title} card={boostCard} isVisible={isVisible} />
      ))}
    </section>
  )
})

const Card: React.FC<CardProps & { isVisible: boolean }> = React.memo(({ card, isVisible }) => {
  const [animatedPercent, setAnimatedPercent] = useState(0)

  useEffect(() => {
    if (!isVisible) return

    const targetPercent = parseInt(card.percent)
    const duration = 1600
    const intervalTime = 20
    const increment = targetPercent / (duration / intervalTime)

    const intervalId: ReturnType<typeof setInterval> = setInterval(() => {
      setAnimatedPercent((prev) => {
        const nextPercent = prev + increment
        if (nextPercent >= targetPercent) {
          clearInterval(intervalId)
          return targetPercent
        }
        return nextPercent
      })
    }, intervalTime)

    return () => clearInterval(intervalId)
  }, [card.percent, isVisible])

  return (
    <section className='card'>
      <section className='cardHeader'>
        <svg width="30" height="30" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 20.1758L12 3.17578M12 3.17578L5 10.4615M12 3.17578L19 10.4615" stroke="#F4F4F4" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <h4 className='cardPercent'> {Math.floor(animatedPercent)}%&nbsp; </h4>
        <h4 className='cardHeader'> {card.title} </h4>
      </section>
      <section className='cardDescription'>
        <p> {card.description} </p>
      </section>
    </section>
  )
})

export default Cards