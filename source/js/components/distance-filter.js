
const distanceFilter = (settings) => {

    const rangeEl = document.querySelector('.js-range');

    function init() {
        rangeEl.addEventListener('change', onRangeChange);
    }

    function onRangeChange(event) {
        const distance = event.target.value;
        settings.onFilterChange({distance});
    }

    function disable(isDisabled) {
        rangeEl.disabled = isDisabled;
    }

    init();

    return {
        disable
    }
}

export default distanceFilter;
