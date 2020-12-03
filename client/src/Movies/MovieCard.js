import React from 'react';
import { Link } from 'react-router-dom';

export default function MovieCard(props) {
  const { id, title, director, metascore, stars } = props.movie;

  return (
    <div className="save-wrapper">
      <div className="movie-card">
        {!stars ? (
          <Link to={`/movie/${id}`}>
            <h2>{title}</h2>
          </Link>
        ) : (
          <h2>{title}</h2>
        )}
        <div className="movie-director">
          Director: <em>{director}</em>
        </div>
        <div className="movie-metascore">
          Metascore: <strong>{metascore}</strong>
        </div>
        {stars && (
          <div>
            <h3>Actors</h3>

            {stars.map((star) => (
              <div key={star} className="movie-star">
                {star}
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="save-button" onClick={() => props.addToSavedList(id)}>
        Save
      </div>
    </div>
  );
}
