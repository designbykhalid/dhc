const updateDistanceFilterStatus = (settings) => {

    console.log('called');

    const filterActiveDistanceEl = document.querySelector('.js-active-distance');
    const filterZipCodeEl = document.querySelector('.js-active-zipcode');

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
