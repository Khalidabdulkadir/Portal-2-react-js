import React from 'react'
import "./report.css"


const Reporting = () => {
  return (
    <div>
        <div className="report-container">
            <div className="report-minor">
            <p>Reporting</p>

            <button className='Btn'>Report</button>
            </div>
            <p>My Reporting History</p>
            <table border='1' className='table'>
                <thead>
                    <tr><th>#</th><th>Semester</th><th>Date Reported</th><th>Type</th></tr>
                </thead>
                <tbody>
                    <tr><td>1</td><td>Trimister 3 2023</td><td>08 sep 2023</td><td>Report online</td></tr>
                    <tr><td>1</td><td>Trimister 3 2023</td><td>08 sep 2023</td><td>Report online</td></tr>
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default Reporting
