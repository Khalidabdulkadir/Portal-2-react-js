import React from 'react'
import sawir from "../Header/images/347876497_1161094627902021_1076945842472824_n.jpg"
import "./sidebar.css"
import { NavLink } from 'react-router-dom'
import HostelBooking from './HostelBooking'

const Side = () => {

  return (
    <div className='component-container'>
       <div className='sidebar-container-2'>
          <aside className='Sidebar2'> 
            <div className='img-container'>
    
            <img src={sawir} alt='Kemu university'/>
            </div>
            <div className='icons-container-2'>
              <p><i class="fa-solid fa-house"></i><NavLink to='/'>Home</NavLink> </p> 
              <p><i class="fa-regular fa-calendar-xmark"></i><NavLink to='/report'>Reporting</NavLink> </p> 
              <p><i class="fa-solid fa-money-bill"></i><NavLink to='/fees'>Fees</NavLink> </p> 
              <p><i class="fa-solid fa-book"></i><NavLink to='/units'>units</NavLink> </p> 
              <p><i class="fa-solid fa-graduation-cap"></i> Examination</p> 
              <p><i class="fa-solid fa-bed"></i><NavLink to='/hostel'> Hostel booking</NavLink> </p> 
              <p><i class="fa-regular fa-folder-open"></i> Respirotory</p> 
            </div>
          </aside>
        </div>
        
    </div>
  )
}

export default Side
