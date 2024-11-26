import React from 'react'

import Button from '../../../../../../../SmallComponents/Button/Button'

import { SubmitButtonProps } from './interfaces/interfaces'

import './styles/SubmitButton.css'

const SubmitButton: React.FC<SubmitButtonProps> = React.memo(({ handleFormSubmition }) => {
  return (
    <div className='submitButtonContainer'>
      <Button
        text='Submit'
        onClick={handleFormSubmition}
      />
    </div>
  )
})

export default SubmitButton