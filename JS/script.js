'use strict';

const numberOfFilms = +prompt('Сколько фильмов вы посмотрели?', '');

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

for (let i = 0; i < 2; i++) {
  let a = prompt('Последний просмотренный фильм?', ''),
      b = prompt('На сколько оцените его?','');
  if (a !== '' && a !== null && a.length < 50 && b !== '' && b !== null) {
    personalMovieDB.movies[a] = b;
  } else {
    i--;
  }
} 

if (personalMovieDB.count < 10) {
  console.log('Просмотренно слишком мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
  console.log('Вы класический зритель');
} else if (personalMovieDB.count > 30) {
  console.log('Вы киноман!');
} else {
  console.log('Произошла ошибка');
}




console.log(personalMovieDB);
