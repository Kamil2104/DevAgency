import React from 'react'

import Title from './components/Title'
import Cards from './components/Cards'
import Button from '../../../components/SmallComponents/Button/Button'

import { BoostCard } from './interfaces/interfaces'

import './Boosts.css'
import './BoostsResponsivenes.css'

const Boosts: React.FC = () => {
  const cards: BoostCard[] = [
    {
      percent: "40%",
      title: "Cut time",
      description: "on routine legal tasks such as document summaries, risk analysis, and fact finding  by leveraging AI-powered automation."
    },
    {
      percent: "65%",
      title: "Boost output",
      description: "in pre-research and case preparation, thanks to Solomon's advanced AI capabilities that minimize human error."
    },
    {
      percent: "68%",
      title: "Faster search",
      description: "improve the accuracy of legal research and document reviews, reducing errors and ensuring reliable outcomes."
    }
  ]

  return (
    <section className='boosts'>
      <Title />
      <Cards boostCards={cards} />
      <Button text='Learn more' onClick={() => console.log("")} />
    </section>
  )
}

export default Boosts