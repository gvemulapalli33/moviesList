import React, {useContext} from "react";
import "./Home.css";
import {Link} from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import MoviesList from '../../components/MoviesList/moviesList';
import { movieContext } from "../../context/movieContext";
const moviesEndPoint = "https://rancid-tomatillos.herokuapp.com/api/v2";

export default function Home() {
    const {setAllMovies} = useContext(movieContext);
    let [loading, error, {movies}] = useFetch(`${moviesEndPoint}/movies`);
    if (movies) {
        setAllMovies(movies);
    }
    return (
        <div className="App">
            <header className="header">
                Movies List
            </header>
            {loading && <h2>Loading...</h2>}
            {error && <h2>Error Loading Page, Try Reloading the Page</h2>} 
            {<MoviesList/>}
        </div>
    );
}
