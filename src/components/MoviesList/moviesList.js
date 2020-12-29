import React, {useContext} from "react";
import Movie from "../Movie/movie";
import './moviesList.css';
import {movieContext} from "../../context/movieContext";

export default function MoviesList() {
    const {movies} = useContext(movieContext);
    const moviesList = movies.map(({id, poster_path, title, release_date, average_rating, backdrop_path}) => {
        return <Movie key={id} id={id} poster={poster_path} title={title} backdrop={backdrop_path} release={release_date} rating={average_rating}></Movie>
    });
    
    return (
        <main className="moviesList">
            {moviesList}
        </main>
    );
}