import React from 'react'
import sawir from "../Header/images/347876497_1161094627902021_1076945842472824_n.jpg"

const Fees = () => {
  return (
    <div>
      <div className="report-container">
            <div className="report-minor">
            <p>Fees Statement</p>
            
            <button className='Btn'>Download</button>
            </div>
            <p>Fees History</p>
            
            <div className="Fees-container">
                <div className="img-con">
                    <img src={sawir} alt="" />
                </div>
                <div className="po-box-info">
                    <h2>KENYA METHODIST UNIVERSITY</h2>
                    <p>P.O. BOX 267- 60200 MERU – KENYA</p>
                    <p>TEL: +254-064-31206, 31229, 31171, 0724 256 162,</p>
                    <p>Email: vice.chancellor@kemu.ac.ke ~ Web: www.kemu.ac.ke</p>
                        <h2>Fees Statement</h2>
                </div>
                <hr />
                <div className="student-info-con">
                    <div className="student-info-left">
                        <p>STUDENT NAME: KHALID ABDIKADIR DIRIYE</p>
                        <p>PROGRAMME: BACHELOR OF SCIENCE IN COMPUTER INFORMATION SYSTEMS</p>
                        <p>DEPARTMENT: DEPARTMENT OF COMPUTER SCIENCE</p>
                        <p>SCHOOL/FACULTY: SCHOOL OF SCIENCE AND TECHNOLOGY</p>
                    </div>
                    <div className="student-info-right">
                        <p>REG NO: CIS-1-2577-2/2023</p>
                        <p>REG NO: CIS-1-2577-2/2023</p>
                        <p>REG NO: CIS-1-2577-2/2023</p>
                        <p>REG NO: CIS-1-2577-2/2023</p>
                    </div>
                </div>
            </div>

            <table border='1' className='table'>
                <thead>
                    <tr><th>No</th><th>Date</th><th>Debt</th><th>Balance</th></tr>
                </thead>
                <tbody>
                    <tr><td>1</td><td>Trimister 3 2023</td><td>78,000.00</td><td>78,000.00</td></tr>
                    <tr><td>2</td><td>16/05/2023</td><td>78,000.00	</td><td>Report online</td></tr>
                </tbody>
            </table>

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

export default Fees
