import './App.css';
import React from "react";
import MoviesList from './components/MoviesList/moviesList';


function App() {
  return (
    <div className="App">
      <header className="header">
        Movies List
      </header>
      <MoviesList/>
    </div>
  );
}

export default App;
