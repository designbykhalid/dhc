import React from 'react';

class DoctorSpecialtiesListItem extends React.Component {
  
    render() {
        console.log(this.props.specialties);
      return (
      <li className="specialties-list__item">{this.props.specialties}</li>
      )
    }
  }


export default DoctorSpecialtiesListItem;
