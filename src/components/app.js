import React, {useEffect, useState} from 'react';
import Search from './search/search.js';
import Gender from './gender/gender.js';
import Distance from './distance/distance.js';
import DoctorInfoList from './results/doctorInfoList.js';
import TotalResults from './results/totalResults.js';


const App = () => {
	
	const [finalResults, setFinalResults] = useState({
		results: [],
		filteredResults: [],
		zipCode: '',
		genders: 'nopreference',
		distance: 'all'
	});
	
    useEffect(() => {
		onFilterChange();
	}, [finalResults.genders, finalResults.distance, finalResults.results]);
	

	const handleSearch = (searchResults) => {
		setFinalResults({...finalResults, ...searchResults});
	}

	const handleGender = (val) => {
		setFinalResults({...finalResults, genders: val});
	}

	const handleDistance = (val) => {
		setFinalResults({...finalResults, distance: val});
	}
	

    const onFilterChange = () => {
        const distance = finalResults.distance;
        const genders = finalResults.genders;
        const isDistanceAll = finalResults.distance === 'all';
		const isGendersNoPreference = genders === 'nopreference';

	
        function filterByDistance(item) {
            return isDistanceAll || item.distance <= parseInt(distance);
        }

        function filterbyGender(item) {
            return isGendersNoPreference || item.gender.toLowerCase() === genders;
        }

        const filteredArray =  finalResults.results
            .filter(filterbyGender)
            .filter(item => item.locations.some(filterByDistance))
            .map(item => ({
                ...item, 
                locations: item.locations.filter(filterByDistance)
			}));
			setFinalResults({...finalResults, filteredResults: filteredArray})
	}

	return (
		<>
			<Search getSearchResults={handleSearch} />
			<div className="content content--2col-left">
			{ finalResults.filteredResults.length ?  <ResultsContainer handleDistance={handleDistance} handleGender={handleGender} finalResults={finalResults} /> : '' }
			</div>
		</>
	);
}


const ResultsContainer = ({handleDistance, handleGender, finalResults}) => {
    return (
		<div className="content-container">
			<div className="sidebar-content">
				<Distance getDistance={handleDistance} zipCode={finalResults.zipCode} />
				<Gender getGender={handleGender} />
			</div>

			<div className="results-content">
				<TotalResults totalResults={finalResults.filteredResults.length} />
				<DoctorInfoList doctorsList={finalResults.filteredResults} />
			</div>
		</div>
    );
  }

export default App;
