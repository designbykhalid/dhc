import React from 'react';

const Search = () => {
    return (
        <div className="search-form">
            <form className="js-search-form">
                <fieldset className="js-search-fieldset">
                    <div className="search">
                        <div className="search__input">
                            <label htmlFor="searchzipcode" className="label search-label">Zip Code</label>
                            <input className="input js-search" id="searchzipcode" name="searchzipcode" type="search" placeholder="Search Zip Code" value="" pattern="[0-9]{5}" maxLength="5" />
                        </div>
                        <div className="search__button">
                            <input className="input button button--primary js-search-btn" id="button" name="button" type="submit" value="Search" />
                        </div>
                    </div>
                </fieldset>
            </form>
        </div>
    );
};

export default Search;
