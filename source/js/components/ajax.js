import fetchUtils from "@degjs/fetch-utils";

const ajaxData = () => {
    const url = document.querySelector('.js-api').dataset.api;
    let settings;

	const defaults = {
                apiUrl: url,
                fetchParams: {
                    body: null,
                    method: 'POST'     
                },
                fetchOptions: {
                    timeout: 100000 
                }
            };

    function fetchData(options) {
        settings = {...defaults, ...options};

        return fetchUtils.getJSON(
                        settings.apiUrl,
                        settings.fetchParams,
                        settings.fetchOptions
                        )
    } 

    return {
        fetchData
    }
}

export default ajaxData;