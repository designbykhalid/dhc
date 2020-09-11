import React from 'react';
import DoctorLocationsList from './DoctorLocationsList.js'
import DoctorSpecialtiesList from './DoctorSpecialtiesList.js'

const DoctorInfoListItem = ({
    image,
    url,
    fullName,
    gender,
    specialties,
    locations
    }) => {
      return (
        <li className="doctor-list__item">

            <div className="doctor-info">
                <div className="doctor-info__general">
                    <div className="doctor-image">
                        <img src={image} alt={fullName} />
                    </div>
                    
                    <div className="doctor-general">
                        <h3 className="doctor-name"><a href={url} target="_blank">{fullName}</a></h3>
                        <h4 className="doctor-gender">Gender: {gender}</h4>
                        <DoctorSpecialtiesList specialties={specialties}/>
                    </div>
                </div>
                <div className="doctor-info__location">
                    <DoctorLocationsList locations={locations} />
                </div>
            </div>
        </li>
      )
  }
  


export default DoctorInfoListItem;