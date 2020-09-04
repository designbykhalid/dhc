import React from 'react';
import DoctorLocationsListItem from './DoctorLocationsListItem.js'

class DoctorLocationsList extends React.Component {
  
    render() {
      return (
        <ul className="doctor-location">
            { this.props.locations.map((item, index) => <DoctorLocationsListItem key={index} {...item} />) }
        </ul>
      )
    }
  }


export default DoctorLocationsList;





