const updateDistanceFilterStatus = (settings) => {
    
    function init() {
        updateDistanceFilterValues();
    }

    function updateDistanceFilterValues() {
        settings.ActiveDistanceEl.innerHTML = settings.distanceVal;
        settings.zipCodeEl.innerHTML = settings.zipCodeVal;
    }

    init();
}

export default updateDistanceFilterStatus;
