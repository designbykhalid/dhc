import React from 'react';

const Gender = (props) => {

    const handleOnChange = (e) => {
        props.getGender(e.target.value);
    }
    return (
        <div className="filter-section filter-section__gender">
            <form className="gender-filter-form">
                <fieldset className="field-group" onChange={e => handleOnChange(e)}>
                    <legend className="field-group__label">Gender</legend>
                    <ul className="field-list">
                        <li className="field field-list__item">
                            <input className="input gender-checkbox" type="radio" id="male" name="gender" value="male" />
                            <label htmlFor="male" className="label ">Male</label>
                        </li>
                        <li className="field field-list__item">
                            <input className="input gender-checkbox" type="radio" id="female" name="gender" value="female" />
                            <label htmlFor="female" className="label ">Female</label>
                        </li>
                        <li className="field field-list__item">
                            <input className="input gender-checkbox" type="radio" id="nopreference" name="gender" value="nopreference" defaultChecked />
                            <label htmlFor="nopreference" className="label ">No Preference</label>
                        </li>
                    </ul>
                </fieldset>
            </form>
        </div>
    )
}


export default Gender;





