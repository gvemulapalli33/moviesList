import React from "react";
import "./movie.css";
import {Link} from "react-router-dom";
import {PropTypes} from "prop-types";

function Movie({poster, title, release, rating, id}) {
    const bgStyle = {
        backgroundImage: `url(${poster})`,
        backgroundSize: `cover`
    }
    return (
        <Link to={`/movies/${id}`} className="link">
            <article className="movie" style={bgStyle}>
                <h4 className="title">{title}</h4>
                <footer className="footer">
                    <p className="releaseDate"><span className="gap">📆</span> {release}</p>
                    <p className="rating"><span className="gap">⭐</span> {rating.toFixed(1)}</p>
                </footer>
            </article>
        </Link>
    );
}

Movie.propTypes = {
    id: PropTypes.string.isRequired,
    poster: PropTypes.string,
    title: PropTypes.string, 
    release: PropTypes.string, 
    rating: PropTypes.string
};

export default Movie;