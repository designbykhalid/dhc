import React from 'react';

class DoctorLocationListItem extends React.Component {
  
    render() {
      return (
        <li class="doctor-location__item">
            <a href="#" className="doctor-location__link">{this.props.name}</a>
            <div className="doctor-location__distance">{this.props.distance.toFixed(1)} Miles</div>
        </li>
      )
    }
  }


export default DoctorLocationListItem;





