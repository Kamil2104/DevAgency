import React from 'react'

import './styles/Description.css'

const Description: React.FC = React.memo(() => {
  return (
    <p> 
        The feature leverages a dedicated language model assistant to process up to 50 documents at once.
        Users can upload multiple files and add context, enabling them to select specific documents of interest.
        Once selected, they can ask targeted questions related to those documents, receiving precise answers based on the provided context.
    </p>
  )
})

export default Description