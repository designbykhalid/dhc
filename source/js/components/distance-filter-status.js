const filterActiveDistanceEl = document.querySelector('.js-active-distance');
const filterZipCodeEl = document.querySelector('.js-active-zipcode');

const updateDistanceFilterStatus = (settings) => {

    function init() {
        updateDistanceFilterValues();
    }

    function updateDistanceFilterValues() {
        filterActiveDistanceEl.innerHTML = settings.distanceVal;
        filterZipCodeEl.innerHTML = settings.zipCodeVal;
    }

    init();
}

export default updateDistanceFilterStatus;
