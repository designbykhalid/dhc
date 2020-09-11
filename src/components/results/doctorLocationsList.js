import React from 'react';

const DoctorLocationsList = ({locations}) => {
    return (
      <ul className="doctor-location">
          { locations.map((item, index) => <DoctorLocationsListItem key={index} {...item} />) }
      </ul>
    )
}

const DoctorLocationsListItem = ({name, distance}) => {
  return (
    <li className="doctor-location__item">
        <a href="#" className="doctor-location__link">{name}</a>
        <div className="doctor-location__distance">{distance.toFixed(1)} Miles</div>
    </li>
  )
}



export default DoctorLocationsList;





