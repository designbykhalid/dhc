import fetchUtils from "@degjs/fetch-utils";

const searchForm = () => {


    const formEl = document.querySelector('.js-search-form');
    const layoutEl = document.querySelector('.js-general-content')

    const url = formEl.dataset.api;

    function init() {
        formEl.addEventListener('submit', e => {
            e.preventDefault();
            getData();
        });
    }


    function getData() {
        const formEls = formEl.querySelectorAll('.js-value');
        fetchUtils.getJSON(
            url,
            {
                body: JSON.stringify(formEls),
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                }
            },
            {
                timeout: 10000
            }
        )
        .then((data) => {
            renderResults(data.results);
        })
        .catch(error => {
            alert(error);
        });
    }

    function renderLocations(item) {
        return `<ul class="doctor-location">
                    ${item.locations.map(item => {
                        return `<li class="doctor-location__item">
                                    <a href="${item.url}" class="doctor-location__link">${item.name}</a>
                                    <div class="doctor-location__distance">${item.distance.toFixed(1)} Miles</div>
                                </li>`
                    }).join('')}
                </ul>`
    }


    function renderSpecialties(item) {
        return `<ul class="specialties-list">
                    ${item.specialties.map(item => {
                        return `<li class="specialties-list__item">${item}</li>`
                    }).join('')}
                </ul>`
    }

    function renderTotalNumberOfResults(data) {
        const totalNumbers = data.length;
        const totalResults =  `<h2 class="doctors-total-result">Total Results: <span>${totalNumbers}</span></h2>`
        layoutEl.insertAdjacentHTML('afterbegin', totalResults);
    }

    function renderDoctorsList(data) {
        const renderDoctors = data.map(item => {
            return `<li class="doctor-list__item"> 
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
                    </li>`;
        }).join('');

        layoutEl.insertAdjacentHTML('beforeend', `<ul class="doctor-list">${renderDoctors}</ul>`);
        
    }

    function renderResults(data) {
        layoutEl.innerHTML = '';
        renderDoctorsList(data);
        renderTotalNumberOfResults(data);
    }

    init();
}

export default searchForm;
