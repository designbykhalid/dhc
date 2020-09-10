import React from 'react';
import Search from './search/search.js';
import Gender from './gender/gender.js';
import Distance from './distance/distance.js';
import DoctorInfoList from './results/doctorInfoList.js';
import TotalResults from './results/totalResults.js';
import data from '../api/doctors.json'

class App extends React.Component {
    constructor() {
		super();
		this.state = {      
			results:  []  
		};  
	}

	componentDidMount() {
		this.setState({
			results: data.results 
		});
	}
	  
	render() {
		return (
			<>
			   <Search />
			   <div className="content content--2col-left">
					<div className="results-container is-vishiden">
						<div className="sidebar-content">
							<form className="js-filters-form">
								<Distance />
								<Gender />
							</form>
						</div>
						<div className="general-content js-general-content ">
							<TotalResults totalResults={this.state.results.length} />
							<DoctorInfoList doctorsList={this.state.results} />
						</div>
					</div>
				</div>
			</>
		);
	}
}

export default App;
