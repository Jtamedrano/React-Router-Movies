import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import MovieCard from './MovieCard';

export default function Movie(props) {
  const [movie, setMovie] = useState();

  const params = useParams();
  // Change ^^^ that line and use a hook to obtain the :id parameter from the URL

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/movies/${params.id}`) // Study this endpoint with Postman
      .then((response) => {
        // Study this response with a breakpoint or log statements
        console.log(response.data);
        // and set the response data as the 'movie' slice of state
        setMovie(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  // Uncomment this only when you have moved on to the stretch goals
  // const saveMovie = evt => { }

  if (!movie) {
    return <div>Loading movie information...</div>;
  }

  return <MovieCard movie={movie} />;
}
