import React from 'react';

import './Card.css'

function Card(props) {
    const {id, name, city, country, employer, title, favoriteMovies} = props.filteredUser[0];
    return(
        <div className="Card">
            <div className="CardPageID">
                <h1>{id}/25</h1>
            </div>
            <div className="CardNameDiv">
                <h1 className="CardName">{name.first} {name.last}</h1>
            </div>
            <div className="CardInfoDiv">
                <h3>From: <span className="CardInfoSpan">{city}, {country}</span></h3>
                <h3>Job Title: <span className="CardInfoSpan">{title}</span></h3>
                <h3>Employer: <span className="CardInfoSpan">{employer}</span></h3>
            </div>
            <div className="CardMoviesDiv">
                <h3>Favorite Movies:</h3>
                <ul className="CardMoviesList">
                    <li>1. {favoriteMovies[0]}</li>
                    <li>2. {favoriteMovies[1]}</li>
                    <li>3. {favoriteMovies[2]}</li>
                </ul>
            </div>
        </div>
    )
}

export default Card;