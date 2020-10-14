import React, {useEffect, useState} from 'react';
import fetchUtils from '@degjs/fetch-utils';

const Search = (props) => {

    const [searchResults, setSearchResults] = useState({
        zipCode: '',
        results: []
    });

    useEffect(() => {
        props.getSearchResults(searchResults);
    }, [searchResults]);
    
    const handleOnChange = (e) => {
        setSearchResults({...searchResults, zipCode: e.target.value});
    }

    const handleOnSubmit = (e) => {
        e.preventDefault();

		const url = 'http://localhost:8080/api/doctors';
        fetchUtils.getJSON(
            url,
            {
                method: 'POST',
                body: JSON.stringify(searchResults.zipCode),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(data => {
               setSearchResults({...searchResults, results: data.results});
            })
            .catch(error => {
                console.log(error);
            });
    }

    return (
        <div className="search-form-container">
            <form className="search-form" onSubmit={e => handleOnSubmit(e)}>
                <fieldset className="search-fieldset">
                    <div className="search">
                        <div className="search__input">
                            <label htmlFor="searchzipcode" className="label search-label">Zip Code</label>
                            <input className="input" id="searchzipcode" name="searchzipcode" value={searchResults.zipCode || ''} onChange={e => handleOnChange(e)} required type="search" placeholder="Search Zip Code"  pattern="[0-9]{5}" maxLength="5" />
                        </div>
                        <div className="search__button">
                            <input className="input button button--primary" id="button" name="button" type="submit" value="Submit" />
                        </div>
                    </div>
                </fieldset>
            </form>
        </div>
    );
};



export default Search;
