import React from 'react';

const SearchHeader = () => {

    return (
        <form
            className="ps-form--quick-search"
            method="get"
            action="/"
            >
            <div className="ps-form__categories"></div>
            <div className="ps-form__input">
                <input
                    className="form-control"
                    type="text"
                    placeholder="I'm shopping for..."
                />
            </div>
            <button>Search</button>
        </form>
    );
};

export default SearchHeader;
