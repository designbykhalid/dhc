const genderFilter = (settings) => {

    const radioEls = [...document.querySelectorAll('.js-radio')];

    function init() {
        radioEls.forEach(item => {
            item.addEventListener('change', onCheckBoxChange);
        });
    }

    function getCheckBoxValues() {
        const genders = radioEls.filter(item => item.checked).map(item => item.value.toLowerCase());
        return { genders: genders.toString()};
    }

    function onCheckBoxChange() {
        settings.onFilterChange(getCheckBoxValues());
    }

    function disable(isDisabled) {
        radioEls.forEach(item => {
            item.disabled = isDisabled;
        });
    }


    init();

    return {
        disable
    }

}


export default genderFilter;
