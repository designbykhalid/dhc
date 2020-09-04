import React from 'react';
import Search from './search/search.js';
import Gender from './gender/gender.js';
import Distance from './distance/distance.js';
import Results from './results/results.js';
import data from '../api/doctors.json'

const App = () => {
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
						<Results resultsData={data}/>
					</div>
				</div>
			</div>
        </>
    );
}

export default App;
