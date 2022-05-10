import React from "react";

const IMAGE_API = "https://image.tmdb.org/t/p/original";

const Movie = ({ title, poster_path, overview, vote_average, 
    release_date, popularity, original_language, vote_count }) => (
    
    <div className="movie">
        <span className="vote">{vote_average}</span>
        {/* if there's no image from the Image API 
        then it display the image from url below  */}
        <img src={poster_path ? (IMAGE_API + poster_path) : 
        "https://images.unsplash.com/photo-1616530940355-351fabd9524b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80"
        } alt={title} />
        <div className="movie-info">
            <h3>{title}</h3>
        </div>

        <div className="movie-detail">
            <h2>Overview</h2>
            <p>{overview}</p>
            <ul>
                <li>Release date: {release_date}</li>
                <li>Popularity: {popularity}</li>
                <li>Original language: {original_language}</li>
                <li>Vote count: {vote_count}</li>
            </ul>
        </div>
    </div>
);

export default Movie;