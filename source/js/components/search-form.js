import fetchUtils from "@degjs/fetch-utils";

const searchForm = () => {

    const formEl = document.querySelector('.js-search-form');
    const searchInputEl = formEl.querySelector('.js-search');
    const searchButtonEl = formEl.querySelector('.js-search-btn');
    const layoutEl = document.querySelector('.js-general-content');
    const url = formEl.dataset.api;

    function init() {
        formEl.addEventListener('submit', onSearchSubmit);
    }

    function onSearchSubmit(e) {
        e.preventDefault();
        getData();
    }

    function getData() {
        preloader(true);
        fetchUtils.getJSON(
            url,
            {
                body: JSON.stringify(searchInputEl.value),
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        )
        .then(data => {
            preloader(false);
            renderResults(data.results);
        })
        .catch(error => {
            preloader(false);
            alert(error);
        });
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

    function renderLocations(item) {
        return `<ul class="doctor-location">
                    ${item.locations.map(item => 
                        `<li class="doctor-location__item">
                            <a href="${item.url}" class="doctor-location__link">${item.name}</a>
                            <div class="doctor-location__distance">${item.distance.toFixed(1)} Miles</div>
                        </li>`).join('')}
                </ul>`
    }


    function renderSpecialties(item) {
        return `<ul class="specialties-list">
                    ${item.specialties.map(item => `<li class="specialties-list__item">${item}</li>`).join('')}
                </ul>`
    }



    function renderDoctorsSearchResult(data) {
        const totalNumberOfDoctors = data.length;
        
        return `<h2 class="doctors-total-result">Total Results: <span>${totalNumberOfDoctors}</span></h2>
                <ul class="doctor-list">
                    ${data.map(item => 
                        `<li class="doctor-list__item"> 
                                <div class="doctor-info">
                                    <div class="doctor-info__general">
                                        <div class="doctor-image">
                                            <img src="${item.image}" alt="">
                                        </div>
                                        <div class="doctor-general">
                                            <h3 class="doctor-name"><a href="${item.url}" target="_blank">${item.fullName}</a></h3>
                                            ${renderSpecialties(item)}
                                        </div>
                                    </div>
                                    <div class="doctor-info__location">
                                        ${renderLocations(item)}
                                    </div>
                                </div>
                            </li>`
                    ).join('')}
                </ul>`;        
    }

    function renderResults(data) {
        layoutEl.innerHTML = renderDoctorsSearchResult(data);
    }

    init();
}

export default searchForm;
