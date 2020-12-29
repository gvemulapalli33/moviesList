import './App.css';
import React from "react";
import {BrowserRouter as Router} from "react-router-dom";
import {Route, Switch} from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/Login/login";
import MovieDetails from "./components/MovieDetails/movieDetails";
import {MovieContextProvider} from "./context/movieContext";

function App() {
  return (
    <MovieContextProvider>
      <Router>
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route exact path="/movies/:movie_id">
              <MovieDetails />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
          </Switch>
      </Router>
    </MovieContextProvider>
  );
}

export default App;
