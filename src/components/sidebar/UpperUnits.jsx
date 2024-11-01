import React, { useState } from 'react'
import Units from './Units'
import UnitsHistory from './UnitsHistory'
import Information from './Information'

const UpperUnits = () => {
  const[value, setValue] = useState('units')
  const togglePannels = () => {
      if(value === 'units'){
        return <Units />
      }
      else if(value === 'unit-history'){
        return <UnitsHistory />
      }
      else if(value === 'information'){
        return <Information />
      }
  }
  return (
    <div>
    <div className="uper-unit">
        <p className='first' onClick={() => setValue("units")}> Registered Units</p>
        <p onClick={() => setValue("unit history")}>Unit history</p> 
        <p onClick={() => setValue("information")}>Information</p>
      </div>
        {togglePannels()}
      </div>
  )
}

export default UpperUnits
