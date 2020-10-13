import React from 'react';
import Search from './search/search.js';
import Gender from './gender/gender.js';
import Distance from './distance/distance.js';
import DoctorInfoList from './results/doctorInfoList.js';
import TotalResults from './results/totalResults.js';
import fetchUtils from '@degjs/fetch-utils';


class App extends React.Component {
    constructor(props) {
		super(props);
		this.state = {     
			results: [],
			filteredResults: [],
			zipCode: '',
			genders: 'nopreference',
			distance: 'all'
		};  
	}


	handleZipCode = (val) => {
		this.setState({zipCode: val},() => {this.onFilterChange()});
	}

	handleGender = (val) => {
		this.setState({genders: val},() => {this.onFilterChange()});
	}

	handleDistance = (val) => {
		this.setState({distance: val},() => {this.onFilterChange()});
	}
	
	componentDidMount() {

		const url = 'http://localhost:8080/api/doctors';
        fetchUtils.getJSON(
            url,
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(data => {
				this.setState({results: data.results});
            })
            .catch(error => {
                console.log(error);
			});
	}

    onFilterChange() {

        const distance = this.state.distance;
        const genders = this.state.genders;
        const isDistanceAll = this.state.distance === 'all';
		const isGendersNoPreference = genders === 'nopreference';

	
        function filterByDistance(item) {
            return isDistanceAll || item.distance <= parseInt(distance);
        }

        function filterbyGender(item) {
            return isGendersNoPreference || item.gender.toLowerCase() === genders;
        }

        const filteredArray =  this.state.results
            .filter(filterbyGender)
            .filter(item => item.locations.some(filterByDistance))
            .map(item => ({
                ...item, 
                locations: item.locations.filter(filterByDistance)
			}));
			this.setState({filteredResults: filteredArray})
	}
	
	  
	render() {
		return (
			<>
			   <Search getZipCode={this.handleZipCode} />
			   <div className="content content--2col-left">
					<div className="content-container">
						<div className="sidebar-content">
							<Distance getDistance={this.handleDistance} zipCode={this.state.zipCode} />
							<Gender getGender={this.handleGender} />
						</div>
						<div className="results-content">
							<TotalResults totalResults={this.state.filteredResults.length} />
							<DoctorInfoList doctorsList={this.state.filteredResults} />
						</div>
					</div>
				</div>
			</>
		);
	}
}

export default App;
