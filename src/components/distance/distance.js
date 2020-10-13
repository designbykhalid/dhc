import React from 'react';

class Distance extends React.Component {

    constructor(props) {
        super(props);
        this.handleOnChange = this.handleOnChange.bind(this);
    }

    handleOnChange(event) {
        this.props.getDistance(event.target.value);
    }

    render() {
        return (
            <div className="filter-section filter-section__distance">
                <label htmlFor="range-input" className="label legend-label">Distance</label>
                <input className="input" id="range-input" name="range-input" onChange={event => this.handleOnChange(event)} type="range" defaultValue="30" min="5" max="30" step="5" />
                <ol className="range-label">
                    <li className="range-label__item" data-step="5"> 5 </li>
                    <li className="range-label__item" data-step="10"> 10 </li>
                    <li className="range-label__item" data-step="15"> 15 </li>
                    <li className="range-label__item" data-step="20"> 20 </li>
                    <li className="range-label__item" data-step="25"> 25 </li>
                    <li className="range-label__item" data-step="all"> All </li>
                </ol>
                <div className="distance-status">Current: <span>All</span> miles from <span>{this.props.zipCode}</span></div>
            </div>
        );
    };
}

export default Distance;






