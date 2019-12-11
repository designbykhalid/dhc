import results from './results.js';
import ajaxData from './ajax.js';

const genderFilter = () => {

    const checkBoxEls = [...document.querySelectorAll('.js-checkbox')];
    let checkBoxElValues;

    let doctor =  results();
    let ajax = ajaxData();

    function init() {
        checkBoxEls.forEach(item => {
            item.addEventListener('change', onCheckBoxChange);
        });
    }

    function getData() {
        const options = {
            fetchParams: {
                body: JSON.stringify(checkBoxElValues),
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


    function onCheckBoxChange(e) {
        e.preventDefault();
        checkBoxElValues = {};
        checkBoxEls.forEach(item => checkBoxElValues[item.value] = item.checked);
        getData();
    }

    init();
}

export default genderFilter;
