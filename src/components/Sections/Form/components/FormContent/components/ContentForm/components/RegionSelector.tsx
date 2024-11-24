import React from 'react'

import ReactFlagsSelect from 'react-flags-select';

import { RegionSelectorProps } from './interfaces/interfaces';

import './styles/RegionSelector.css'

const RegionSelector: React.FC<RegionSelectorProps> = React.memo(({ selectedCountryCode, onSelect, error }) => {
    return (
    <section className='regionSelectorContainer'>
      <ReactFlagsSelect
          id='regionSelector'
          selected={selectedCountryCode}
          onSelect={(code) => onSelect(code)}
          placeholder="Select a country code*"
          className={selectedCountryCode ? 'regionSelectorSelected' : 'regionSelector'}
          selectButtonClassName="regionSelectorButton"
      />
      <p className='errorMessage'> {error} </p>
    </section>
  )
})

export default RegionSelector