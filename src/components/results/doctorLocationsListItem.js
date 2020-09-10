import React from 'react';

const DoctorLocationListItem = ({name, distance}) => {
      return (
        <li className="doctor-location__item">
            <a href="#" className="doctor-location__link">{name}</a>
            <div className="doctor-location__distance">{distance.toFixed(1)} Miles</div>
        </li>
      )
  }


export default DoctorLocationListItem;





