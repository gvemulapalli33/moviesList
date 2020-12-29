import React from "react";
import "./movieDetails.css";
import NumberFormat from "react-number-format";
import {Link, useParams} from "react-router-dom";
import useFetch from "../../hooks/useFetch";
const moviesEndPoint = "https://rancid-tomatillos.herokuapp.com/api/v2";


export default function MovieDetails() {
    const {movie_id} = useParams();   
    let [loading, error, {movie}] = useFetch(`${moviesEndPoint}/movies/${movie_id}`);
    let [, , {videos}] = useFetch(`${moviesEndPoint}/movies/${movie_id}/videos`);
    let title, links, backdrop_path, average_rating, release_date, overview, runtime, tagline, revenue, genres, budget, styleBackground;
    if (movie) {
        ({title, backdrop_path, average_rating, release_date, overview, runtime, tagline, revenue, genres, budget} = movie);
        styleBackground = {
            backgroundImage : `url(${backdrop_path})`,
            backgroundPosition: `top center`
        };
        if (videos) {
            links = videos.map(({key}) => {
                return <li className="videolinks"><a rel="noopener noreferrer" target="_blank" href={`https://www.youtube.com/embed/${key}`}>{`https://www.youtube.com/embed/${key}`}</a></li>
            });
        } 
    }
    return (
        <div className="container">
            <Link className="backLink" to="/">Back to MoviesList</Link>
            <section className="movieDetails">
                {loading && <h2>Loading...</h2>}
                {error && <h2>Error Loading Page, Try Reloading the Page</h2>}
                {movie &&
                <>     
                <header className="detailsTitle">{title}</header>
                <section className="movieBackdrop" style={styleBackground}>
                    <section className="movieInfo">
                    <div className="alignContent">
                        <p>Overview</p>
                        <p className="detail overview">{overview}</p>
                    </div>
                    {tagline && <div className="alignContent">
                        <p>TagLine</p>
                        <p className="tagLine">{tagline}</p>
                    </div>
                    }
                    <div className="alignContent">
                        <p>Budget</p>
                        <p className="detail budget">
                        <NumberFormat value={budget} displayType={'text'} thousandSeparator={true} prefix={'$'} />
                        </p>
                    </div>
                    <div className="alignContent">
                        <p>Revenue</p>
                        <p className="detail revenue">
                        <NumberFormat value={revenue} displayType={'text'} thousandSeparator={true} prefix={'$'} />
                        </p>
                    </div>
                    <div className="alignContent">
                        <p>ReleaseDate</p>
                        <p className="detail release">{release_date}</p>
                    </div>
                    <div className="alignContent">
                        <p>RunTime</p>
                        <p className="detail runtime">{`${runtime} mins`}</p>
                    </div>
                     <div className="alignContent">
                        <p>Rating</p>
                        <p className="detail ratingDetails">{average_rating.toFixed(1)}</p>
                    </div>
                    {genres.length > 0 && <div className="alignContent">
                        <p>Genres</p>
                        <ul className="detail genres">
                             {genres.map((genre) => <li>{genre}</li>)}
                        </ul>
                    </div>}
                    <div className="alignContent">
                        <p>VideoLinks</p>
                        <ul className="detail">{links}</ul>
                    </div>
                    </section>
                </section>
                </>}
            </section>
        </div>
    );
}