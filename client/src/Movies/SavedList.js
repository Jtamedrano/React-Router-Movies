import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import shortid from 'shortid';

export default function SavedList(props) {
  return (
    <div className="saved-list">
      <h3>Saved Movies:</h3>
      {props.list.map((movie) => (
        <span key={shortid.generate()} className="saved-movie">
          <NavLink to={`/movie/${movie.id}`}>{movie.title}</NavLink>
        </span>
      ))}
      <Link to="/">
        <div className="home-button">Home</div>
      </Link>
    </div>
  );
}
