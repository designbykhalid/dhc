

const updateDistanceFilterStatus = () => {
    const filterActiveDistanceEl = document.querySelector('.js-active-distance');
    const filterZipCodeEl = document.querySelector('.js-active-zipcode');

    function updateDistanceFilterValues(settings) {
        filterActiveDistanceEl.innerHTML = settings.distanceVal;
        filterZipCodeEl.innerHTML = settings.zipCodeVal;
    }


    return {
        updateDistanceFilterValues
    }
}

export default updateDistanceFilterStatus;
