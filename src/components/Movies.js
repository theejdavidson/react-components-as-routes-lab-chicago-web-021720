import React from 'react';
import { movies } from '../data';

const renderMovies = () => {
  return (movies.map(movie => {
    return (
    <div>
      Title: {movie.title}<br/>
      Time: {movie.time}
      <ul>
        {movie.genres.map(genre => <li>{genre}</li>)}
      </ul>
    </div>
    )})
  )
}

const Movies = () => {
  return (
    <div>
        <h1>Movies Page</h1>
        {renderMovies()}
    </div>
  );
};

export default Movies;
