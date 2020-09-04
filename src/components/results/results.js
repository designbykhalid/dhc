import React from 'react';
import DoctorInfoList from './doctorInfoList.js';
import TotalResults from './totalResults.js';



class Results extends React.Component {

    constructor(props) {
      super(props);
      this.state = {      
          data: this.props.resultsData.results  
      };  
    }

    ccomponentDidMount() {
      console.log('component life cycles will go here, this is just an example')
    }

    render() {
      return (
        <>
        <TotalResults totalResults={this.state.data.length} />
        <DoctorInfoList data={this.state.data} />
        </>
      )
    }
  }


export default Results;