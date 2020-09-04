import React from 'react';

const Distance = () => {
    return (
        <div className="filter-section filter-section__distance">
            <label htmlFor="range-input" className="label legend-label">Distance</label>
            <input className="input js-range" id="range-input" name="range-input" type="range" defaultValue="30" min="5" max="30" step="5" />
            <ol className="range-label">
                <li className="range-label__item" data-step="5"> 5 </li>
                <li className="range-label__item" data-step="10"> 10 </li>
                <li className="range-label__item" data-step="15"> 15 </li>
                <li className="range-label__item" data-step="20"> 20 </li>
                <li className="range-label__item" data-step="25"> 25 </li>
                <li className="range-label__item" data-step="all"> All </li>
            </ol>
            <div className="distance-status">Current: <span className="js-active-distance">All</span> miles from <span className="js-active-zipcode">66204</span></div>
        </div>
    );
};

export default Distance;





