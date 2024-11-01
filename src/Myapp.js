import React from 'react'
import SideBar from './components/sidebar/SideBar'
import Header from './components/Header/Header'
import Information from './components/sidebar/Information'
import Reporting from './components/sidebar/Reporting'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Fees from './components/sidebar/Fees'
import Units from './components/sidebar/Units'
import UpperUnits from './components/sidebar/UpperUnits'
import UnitsHistory from './components/sidebar/UnitsHistory'
import HostelBooking from './components/sidebar/HostelBooking'
const Myapp = () => {
  return (
    <div>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' element={<Information />}/>
          <Route path='/report' element={<Reporting />}/>
          <Route  path='/fees' element={<Fees />}/>     
          <Route path='/un' element={<UnitsHistory/>}/>
          <Route path='/units' element={<UpperUnits/>}/>
          <Route path='/hostel' element={ <HostelBooking />}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Myapp
