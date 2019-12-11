import results from './results.js';
import ajaxData from './ajax.js';

const distanceFilter = () => {

    const rangeEl = document.querySelector('.js-range');
    const filterActiveDistanceEl = document.querySelector('.js-active-distance');
    let doctor =  results();
    let ajax = ajaxData();

    function init() {
        rangeEl.addEventListener('change', onRangeChange);
    }

    function getData() {
        const options = {
            fetchParams: {
                body: JSON.stringify(rangeEl.value),
                method: 'POST'
            }
        }
    
        ajax.fetchData(options).then(data => {   
            doctor.renderResults(data.results);
        })
        .catch(error => {
            alert(error);
        });
    }


    function onRangeChange(e) {
        e.preventDefault();
        filterActiveDistanceEl.innerHTML = rangeEl.value;
        getData();
    }


    init();
}

export default distanceFilter;
