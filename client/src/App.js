import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MovieList from './Movies/MovieList';
import SavedList from './Movies/SavedList';
import { Switch, Route } from 'react-router-dom';
import Movie from './Movies/Movie';

export default function App() {
  const [saved, setSaved] = useState([]); // Stretch: the ids of "saved" movies
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5000/api/movies') // Study this endpoint with Postman
        .then((response) => {
          // Study this response with a breakpoint or log statements
          // and set the response data as the 'movieList' slice of state
          setMovieList(response.data);
        })
        .catch((error) => {
          console.error('Server Error', error);
        });
    };
    getMovies();
  }, []);

  const addToSavedList = (id) => {
    // This is stretch. Prevent the same movie from being "saved" more than once
    const movieNotIncluded =
      saved.filter((el) => {
        return el.id === id;
      }).length === 0;
    const ammendedSaved = [...saved];
    if (movieNotIncluded) {
      const movieToAdd = movieList.filter((movie) => movie.id === id)[0];
      ammendedSaved.push(movieToAdd);
      setSaved(ammendedSaved);
    }
  };

  return (
    <div>
      <SavedList list={saved} />
      <Switch>
        <Route
          path="/movie/:id"
          render={(props) => (
            <Movie addToSavedList={(id) => addToSavedList(id)} />
          )}
        />
        <Route
          path="/"
          render={(props) => (
            <MovieList
              movies={movieList}
              addToSavedList={(id) => addToSavedList(id)}
            />
          )}
        />
      </Switch>
    </div>
  );
}
