import React from 'react'

import SmallTitle from './components/SmallTitle'
import Title from './components/Title'
import Description from './components/Description'
import Video from './components/Video'

import './AddingContext.css'

const AddingContext: React.FC = React.memo(() => {
  return (
    <section className='addingContext'>
        <div className='leftColumn'>
            <SmallTitle />
            <Title />
            <Description />
        </div>
        <div className='rightColumn'>
            <Video />
        </div>
    </section>
  )
})

export default AddingContext