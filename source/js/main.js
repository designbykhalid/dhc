import searchForm from './components/search-form.js';
import updateDistanceFilterStatus from './components/distance-filter-status.js';
import distanceFilter from './components/distance-filter.js';
import genderFilter from './components/gender-filter.js';
import results from './components/results.js';
import fetchUtils from "@degjs/fetch-utils";


const main = function() {

    let resultsData;
    let searchFormInst;
    let distanceFilterInst;
    let genderFilterInst;
    let activeFilterVals = {
        genders: 'nopreference', 
        distance: 'all',
        zipCode: null
    };
    const url = document.querySelector('.js-api').dataset.api;


    function init() {

        searchFormInst = searchForm({
            onSearch: ajaxRequest
        });


        distanceFilterInst = distanceFilter({
            onFilterChange
        });

        genderFilterInst = genderFilter({
            onFilterChange
        });


    };

    function ajaxRequest(searchVal){
        disableFilters();
        activeFilterVals.zipCode = searchVal;

        updateDistanceFilterStatus({
            distanceVal: activeFilterVals.distance, 
            zipCodeVal: activeFilterVals.zipCode
        });

        fetchUtils.getJSON(
            url,
            {
                body: JSON.stringify(searchVal),
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                }
            }
            )
            .then(data => {
                resultsData = data.results;
                results(resultsData);
                enableFilters();
            })
            .catch(error => {
                alert(error);
                enableFilters();
            });
    }



    function onFilterChange(filterObj) {

        activeFilterVals = {...activeFilterVals, ...filterObj};
        const distance = activeFilterVals.distance;
        const genders = activeFilterVals.genders;
        const isDistanceAll = distance === 'all';
        const isGendersNoPreference = genders === 'nopreference';

        function filterByDistance(item) {
            return isDistanceAll || item.distance <= parseInt(distance);
        }

        function filterbyGender(item) {
            return isGendersNoPreference || item.gender.toLowerCase() === genders;
        }

        const filteredArray =  resultsData
            .filter(filterbyGender)
            .filter(item => item.locations.some(filterByDistance))
            .map(item => ({
                ...item, 
                locations: item.locations.filter(filterByDistance)
            }));

        results(filteredArray);

        updateDistanceFilterStatus({
            distanceVal: activeFilterVals.distance, 
            zipCodeVal: activeFilterVals.zipCode
        });

    }




    function disableFilters() {
        searchFormInst.disable(true);
        genderFilterInst.disable(true);
        distanceFilterInst.disable(true);
    }

    function enableFilters() {
        searchFormInst.disable(false);
        genderFilterInst.disable(false);
        distanceFilterInst.disable(false);
    }




    init();
};






main();

