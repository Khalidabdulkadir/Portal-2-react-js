import React from 'react'

const HostelBooking = () => {
  return (
    <div>
       <div className="uper-unit">
        <p className='first'> BOOK Hostel</p>
        <p>History</p> 

      </div>
      <div className="report-container">
            <h2>Hostel Booking TRIMESTER 3 2023</h2>
            <hr />
            <form action="">
                <div className="input-con-hostel">
                    <input type="text" placeholder='Search For Room'/>
                </div>
            </form>
            <table border='1' className='table'>
                <thead>
                    <tr><th>#</th><th>Names</th><th>TYpe </th><th>capacity</th><th>Year</th></tr>
                </thead>
            </table>
        </div>
    </div>
  )
}

export default HostelBooking
