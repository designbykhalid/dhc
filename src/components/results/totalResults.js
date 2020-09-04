import React from 'react';

class TotalResults extends React.Component {  
  render() {
    return (
    <h2 className="doctors-total-result">Total Results: <span>{this.props.totalResults}</span></h2>
    )
  }
}


export default TotalResults;