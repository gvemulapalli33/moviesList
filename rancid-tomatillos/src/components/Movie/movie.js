import React from "react";
import "./movie.css";
import {Link} from "react-router-dom";

export default function Movie({poster, title, release, rating, id, backdrop}) {
    const bgStyle = {
        backgroundImage: `url(${poster})`,
        backgroundSize: `cover`,
        filter: `blur(2px)`,
        height: `100%`
    }
    return (
        <Link to={`/movies/${id}`} className="link">
            <article style={bgStyle}></article>
            <article className="movie">
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
        </Link>
    );
}