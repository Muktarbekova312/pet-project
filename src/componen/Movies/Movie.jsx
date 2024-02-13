import React from 'react';

function Movie({ name, poster, date }) {
  return (
    <article class="movie">
      <img src={poster} class="movie__poster" />
      <h1>{name}</h1>
      <p>{date}</p>
    </article>
  );
}

export default Movie;
