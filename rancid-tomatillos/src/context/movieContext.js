import React, {useState} from "react";
export const movieContext = React.createContext();

export function MovieContextProvider(props) {
    const [movies, setMovies] = useState([]);

   const setAllMovies = (movies) => {
       setMovies(movies);
   };

   return (
       <movieContext.Provider value={{movies, setAllMovies}}>
           {props.children}
       </movieContext.Provider>
   )
}
