import React, {Component} from 'react'

const SearchResults = (props) => {
    const headline = props.headline.articles
        return (
            <div>
                {
                    headline ? headline.map((content, index) => {
                        return (
                            <div key={index} className="card">
                                <div className="card-info">
                                    <img className="articleImg" src={content.urlToImage} />
                                    <h4>{content.title}</h4>
                                    <br />
                                    <button className="archive-button">ARCHIVE</button>
                                </div>
                            </div>
                        )
                    }) : <h1>Loading...</h1>
                } 
            </div>
        )
    }


export default SearchResults