import React, {Component} from 'react'

const SearchForm = (props) => {
    return (
        <div className="search-form">
            <form onSubmit={props.handleChange}>
                <input 
                    className="search-input"
                    type="text" 
                    name="searchBar" 
                    placeholder="Find News" 
                    value={props.inputValue}
                />
                <button 
                    className="search-button"
                    type="submit" 
                    name="submitButton"
                >Search</button>
            </form>
        </div>
    )
}


export default SearchForm