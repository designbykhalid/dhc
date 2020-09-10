import React from 'react';
import DoctorInfoListItem from './DoctorInfoListItem.js'

const DoctorInfoList = ({doctorsList}) => {

  return (
    <ul className="doctor-list">
        { doctorsList.map((item, index) => <DoctorInfoListItem key={index} {...item} />) }
    </ul>
  )
}
  

  


export default DoctorInfoList;