const searchForm = (settings) => {

    const formEl = document.querySelector('.js-search-form');
    const searchInputEl = formEl.querySelector('.js-search');
    const resultsContainerEl = document.querySelector('.js-results-container');

    function init() {
        formEl.addEventListener('submit', onSearchSubmit);
    }

    function onSearchSubmit(e) {
        e.preventDefault();
        resultsContainerEl.classList.remove('is-vishidden');
        const zipCode = searchInputEl.value;
        settings.onSearch(zipCode);
    }

    function disable(isDisabled) {
        searchInputEl.disabled = isDisabled;
    }
    
    init();

    return {
        disable
    }

}

export default searchForm;
