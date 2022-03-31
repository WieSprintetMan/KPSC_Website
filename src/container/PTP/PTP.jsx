import React from 'react'
import ptpvid from '../../assets/KPSC_Video_Purchase+to+Pay.mp4'
import './ptp.css'
const PTP = () => {
  return (
    <div className='kpsc__ptp section__padding'>
        <h1>Purchase to Pay - User Scenario</h1>
        <video autoPlay muted playsInline loop controls>
          <source src={ptpvid} type="video/mp4"/>
        </video>
    </div>
  )
}

export default PTP