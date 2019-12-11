import searchForm from './components/search-form.js';
import distanceFilter from './components/distance-filter.js';
import genderFilter from './components/gender-filter.js';


const main = function() {
    function init() {
        searchForm();
        distanceFilter();
        genderFilter();
    };

    init();
};





main();

