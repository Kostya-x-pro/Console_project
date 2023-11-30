'use strict';

const numberOfFilms = +prompt('How much films you see?', '');

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

const a = prompt('last watch film?', ''), 
      b = +prompt('last film rating'),
      c = prompt('last watch film?', ''), 
      d = +prompt('last film rating');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);
