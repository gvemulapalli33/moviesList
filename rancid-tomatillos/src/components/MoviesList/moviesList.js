import React from "react";
import moviesData from "../../moviesData";
import Movie from "../Movies/movies";
import './moviesList.css';

export default function MoviesList() {

    const moviesList = moviesData['movies'].map(({id, poster_path, title, release_date, average_rating, backdrop_path}) => {
        return <Movie key={id} id={id} poster={poster_path} title={title} backdrop={backdrop_path} release={release_date} rating={average_rating}></Movie>
    });
    
    return (
        <main className="moviesList">
            {moviesList}
        </main>
    );
}