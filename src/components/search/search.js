import React from 'react';

class Search extends React.Component {

    constructor(props) {
        super(props);
        this.state = {value: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        this.props.getZipCode(this.state.value);
        event.preventDefault();
    }

    
    render() {
        return (
            <div className="search-form-container">
                <form className="search-form" onSubmit={this.handleSubmit}>
                    <fieldset className="search-fieldset">
                        <div className="search">
                            <div className="search__input">
                                <label htmlFor="searchzipcode" className="label search-label">Zip Code</label>
                                <input className="input" id="searchzipcode" name="searchzipcode" value={this.state.value} onChange={this.handleChange} type="search" placeholder="Search Zip Code"  pattern="[0-9]{5}" maxLength="5" />
                            </div>
                            <div className="search__button">
                                <input className="input button button--primary" id="button" name="button" type="submit" value="Submit" />
                            </div>
                        </div>
                    </fieldset>
                </form>
            </div>
        );
    }
};



export default Search;
