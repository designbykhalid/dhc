import React from 'react';
import DoctorSpecialtiesListItem from './DoctorSpecialtiesListItem.js'

const DoctorSpecialtiesList = ({specialties}) => {
    return (
      <ul className="specialties-list">
          { specialties.map((item, index) => <DoctorSpecialtiesListItem  key={index} specialty={item} />) }
      </ul>
    )
}


export default DoctorSpecialtiesList;
