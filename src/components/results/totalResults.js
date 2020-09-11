import React from 'react';

const TotalResults = ({totalResults}) => {
    return (
    <h2 className="doctors-total-result">Total Results: <span>{totalResults}</span></h2>
    )
}

TotalResults.defaultProps = {
    totalResults: 0
}

export default TotalResults;