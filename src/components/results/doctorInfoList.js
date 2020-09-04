import React from 'react';
import DoctorInfoListItem from './DoctorInfoListItem.js'

class DoctorInfoList extends React.Component {
  
    render() {
      return (
        <ul className="doctor-list">
            { this.props.data.map((item, index) => <DoctorInfoListItem key={index} {...item} />) }
        </ul>
      )
    }
  }
  


export default DoctorInfoList;