import React from 'react';

const TotalResults = ({totalResults = '0'}) => {
    return (
    <h2 className="doctors-total-result">Total Results: <span>{totalResults}</span></h2>
    )
}

export default TotalResults;