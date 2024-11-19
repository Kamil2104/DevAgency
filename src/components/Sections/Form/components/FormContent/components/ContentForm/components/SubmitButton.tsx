import React from 'react'

import Button from '../../../../../../../SmallComponents/Button/Button'

import { SubmitButtonProps } from './interfaces/interfaces'

const SubmitButton: React.FC<SubmitButtonProps> = React.memo(({ handleFormSubmition }) => {
  return (
    <section className='submitButtonContainer'>
      <Button
        text='Submit'
        stroke='#1D1D1D'
        onClick={handleFormSubmition}
      />
    </section>
  )
})

export default SubmitButton