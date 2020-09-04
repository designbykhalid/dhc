import React from 'react';
import DoctorLocationsList from './DoctorLocationsList.js'
import DoctorSpecialtiesList from './DoctorSpecialtiesList.js'

class DoctorInfoListItem extends React.Component {
    render() {
      return (
        <li className="doctor-list__item"> 
            <div className="doctor-info">
                <div className="doctor-info__general">
                    <div className="doctor-image">
                        <img src={this.props.image} alt="" />
                    </div>
                    <div className="doctor-general">
                        <h3 className="doctor-name"><a href={this.props.url} target="_blank">{this.props.fullName}</a></h3>
                        <h4 className="doctor-gender">Gender: {this.props.gender}</h4>
                        <DoctorSpecialtiesList specialties={this.props.specialties}/>
                    </div>
                </div>
                <div className="doctor-info__location">
                    <DoctorLocationsList locations={this.props.locations} />
                </div>
            </div>
        </li>
      )
    }
  }
  


export default DoctorInfoListItem;