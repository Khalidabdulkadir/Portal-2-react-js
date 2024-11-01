import React from 'react'
import "../Header/header.css"

const Information = () => {
  return (
    <div>
      
    <div className="info-container">
        <p>Latest News</p>
      </div>
      <div className="Money-Container">
        <p>Your Fee Balance is:</p>
        <h2>KES 0.00</h2>
      </div>
      <div className="lower-con">

      <div className="info-container2">
        <div className="uper-units">

        <span>Current Registered units</span>
        <span><i class="fa-solid fa-bars"></i> </span>
        </div>
        <div className="units-con">

        <p>Unit Name</p>
        <p>Unit Code</p>
        <p>Stutus</p>

        <p>Analog Electronics</p>
        <p>Cisy 104</p>
        <p className='approved'>Approved</p>

        <p>Christian Beliefs</p>
        <p>Theo 111</p>
        <p className='approved'> Stutus</p>

        <p>Communication Skills</p>
        <p >Com 111</p>
        <p className='approved'Stutus>Approved</p>

        <p>Intro to Networks</p>
        <p>Cisy 131</p>
        <p className='approved'>Approved</p>
        <p>Intro to programming</p>
        <p>Cisy 130</p>
        <p className='approved'>Approved</p>
        </div>
      </div>
      <div className="Money-Container2">
        <p>Current Hostel</p>
        <h2>No hostel History</h2>
      </div>
      </div>
    </div>
  )
}

export default Information
