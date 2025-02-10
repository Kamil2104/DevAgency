import React from 'react'

import { CharacteristicType } from './interfaces/interfaces'

import Title from './components/Title'
import Description from './components/Description'
import Characteristic from './components/Characteristic'

import './DataSafety.css'
import './DataSafetyResponsiveness.css'

const DataSafety: React.FC = React.memo(() => {
  const characteristics: CharacteristicType[] = [
    {
        name: 'Reliability',
        description: 'The application ensures consistent, error-free performance, even during high demand, thanks to its robust architecture.'
    },
    {
        name: 'Precision',
        description: 'Advanced algorithms provide accurate results, minimizing errors and maintaining data integrity.'
    },
    {
        name: 'Security',
        description: 'Cutting-edge encryption and safeguards like multi-factor authentication protect sensitive data at all times.'
    },
  ]

  return (
    <section className='dataSafety'>
        <div className='content'>
            <div className='leftColumn'>
                <Title />
                <Description />
            </div>
            <div className='rightColumn'>
                {characteristics.map((data) => (
                    <Characteristic key={data.name} data={data}/>
                ))}
            </div>
        </div>
    </section>
  )
})

export default DataSafety