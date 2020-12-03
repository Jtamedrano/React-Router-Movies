import React from 'react';
import shortid from 'shortid';
import MovieCard from './MovieCard';

export default function MovieList(props) {
  return (
    <div className="movie-list">
      {props.movies.map((movie) => (
        <MovieCard
          movie={movie}
          addToSavedList={(id) => props.addToSavedList(id)}
          key={shortid.generate()}
        />
      ))}
    </div>
  );
}
