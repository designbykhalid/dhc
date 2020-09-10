import React from 'react';
import DoctorLocationsListItem from './DoctorLocationsListItem.js'

const DoctorLocationsList = ({locations}) => {
      return (
        <ul className="doctor-location">
            { locations.map((item, index) => <DoctorLocationsListItem key={index} {...item} />) }
        </ul>
      )
  }


export default DoctorLocationsList;





