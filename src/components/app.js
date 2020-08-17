import React from 'react';
import Search from './search/search.js';
import Gender from './gender/gender.js';
import Distance from './distance/distance.js';

const App = () => {
    return (
        <div>
           <Search />
           <div className="content content--2col-left">
				<div className="results-container js-results-container is-vishidden">
					<div className="sidebar-content">
						<form className="js-filters-form">
                            <Distance />
                            <Gender />
						</form>
					</div>
					<div className="general-content js-general-content ">
						Results Goes Here

					</div>
				</div>
			</div>
        </div>
    );
};

export default App;
