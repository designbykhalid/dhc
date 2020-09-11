import React from 'react';

const DoctorSpecialtiesList = ({specialties}) => {
    return (
      <ul className="specialties-list">
          { specialties.map((item, index) => <DoctorSpecialtiesListItem  key={index} specialty={item} />) }
      </ul>
    )
}

const DoctorSpecialtiesListItem = ({specialty}) => {
  return (
    <li className="specialties-list__item">{specialty}</li>
  )
}


export default DoctorSpecialtiesList;
