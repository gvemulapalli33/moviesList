import React, {useState} from "react";
import "./login.css";
import {Link} from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import MoviesList from '../../components/MoviesList/moviesList';
import { movieContext } from "../../context/movieContext";
const moviesEndPoint = "https://rancid-tomatillos.herokuapp.com/api/v2";


export default function Login() {
  //  const {setAllMovies} = useContext(movieContext);
    let [email, setEmail] = useState('');
    let [password, setPassword] = useState('');
    
    const handleSubmit = (event) => {
        event.preventDefault();
        let loginRequest = {email, password};
        fetch(`${moviesEndPoint}/login`, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(loginRequest),
            method: "POST"
        }).then(response => response.json())
          .then(data => console.log(data));
        
    };

    return (
        <div className="formContainer">
          <header>Login</header>
          <form className="form" onSubmit={(event) => handleSubmit(event)}>
              <label htmlFor="email">Email: </label>
              <input id="email" type="text" name="email" value={email} 
              onChange={(event) => setEmail(event.target.value)}/>
              <label htmlFor="password">Password: </label>
              <input id="password" type="password" name="password" value={password} onChange={(event) => setPassword(event.target.value)}/>
              <button className="login">Login</button>
          </form>
        </div>
    );
}
