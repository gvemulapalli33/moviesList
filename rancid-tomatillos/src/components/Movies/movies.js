import React from "react";
import "./movies.css";

export default function Movie({poster, title, release, rating, id, backdrop}) {
    const bgStyle = {
        backgroundImage: `url(${poster})`
    }
    return (
        <article className="movie" style={bgStyle}>
            <h4 className="title">{title}</h4>
            <footer className="footer">
                <div>
                    <p>Release Date:</p>
                    <p className="releaseDate">{release}</p>
                </div>
                <div>
                    <p>Rating:</p>
                    <p className="rating">{rating.toFixed(1)}</p>
                </div>
            </footer>
        </article>
    );
}