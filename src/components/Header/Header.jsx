import React, { useState } from 'react'
import "./header.css"
import sawir from "./images/347876497_1161094627902021_1076945842472824_n.jpg"
import Side from '../sidebar/Side'
import SIdeShort from '../sidebar/SIdeShort'

const Header = () => {
  const [togleside, setToggle] = useState(false)
  return (
    <div>
    <header>
      <div className='icons'>
     {togleside ?
      <i class="fa-solid fa-xmark" onClick={()=> setToggle(false)} ></i> 
      :
      <i class="fa-solid fa-bars" onClick={()=> setToggle(true)}
      ></i> }
      {togleside &&(
        <SIdeShort/>
        )}
      {!togleside &&(
        <Side /> 
      )}
      </div>
    </header>
    </div>

  )
}

export default Header
