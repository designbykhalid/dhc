import React from 'react';
import DoctorSpecialtiesListItem from './DoctorSpecialtiesListItem.js'

class DoctorSpecialtiesList extends React.Component {
  
    render() {
      return (
        <ul className="specialties-list">
            { this.props.specialties.map((item, index) => <DoctorSpecialtiesListItem  key={index} specialties={item} />) }
        </ul>
      )
    }
  }


export default DoctorSpecialtiesList;
