import results from './results.js';
import ajaxData from './ajax.js';


const searchForm = () => {

    const formEl = document.querySelector('.js-search-form');
    const searchInputEl = formEl.querySelector('.js-search');
    const searchButtonEl = formEl.querySelector('.js-search-btn');
    const resultsContainerEl = document.querySelector('.js-results-container');
    const filterZipCode = document.querySelector('.js-active-zipcode');

    let doctor =  results();
    let ajax = ajaxData();

    function init() {
        formEl.addEventListener('submit', onSearchSubmit);
    }


    function getData() {
        preloader(true);
        const options = {
            fetchParams: {
                body: JSON.stringify(searchInputEl.value),
                method: 'POST'
            }
        }
    
        ajax.fetchData(options).then(data => {   
            preloader(false);
            doctor.renderResults(data.results);
        })
        .catch(error => {
            preloader(false);
            alert(error);
        });
    }

    function onSearchSubmit(e) {
        e.preventDefault();
        resultsContainerEl.classList.remove('is-vishidden');
        filterZipCode.innerHTML = searchInputEl.value;
        getData();
    }

    function preloader(showLoading) {
        if(showLoading === true) {
            searchButtonEl.value = 'Searching...';
            searchInputEl.disabled = true;
        } else {
            searchButtonEl.value = 'Search';
            searchInputEl.disabled = false; 
        }
    }

    init();
}

export default searchForm;
