'use strict';

let numberOfFilms;

function start() {
  numberOfFilms = +prompt('Сколько фильмов вы посмотрели?', '');
  
  while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt('Сколько фильмов вы посмотрели?', '');
  }
}

// start();

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

function rememberMyFilms() {
  for (let i = 0; i < 2; i++) {
    let a = prompt('Последний просмотренный фильм?', ''),
        b = prompt('На сколько оцените его?','');
    if (a !== '' && a !== null && a.length < 50 && b !== '' && b !== null) {
      console.log('done');
      personalMovieDB.movies[a] = b;
    } else {
      console.log('error');
      i--;
    }
  } 
}

// rememberMyFilms();

function detectPersonalLevel() {
  if (personalMovieDB.count < 10) {
    console.log('Просмотренно слишком мало фильмов');
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
    console.log('Вы класический зритель');
  } else if (personalMovieDB.count > 30) {
    console.log('Вы киноман!');
  } else {
    console.log('Произошла ошибка');
  }  
}

// detectPersonalLevel();

function showMyDB(hidde) {
  if (!hidde) {
    console.log(personalMovieDB);
  }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres() {
  for (let i = 0; i < 3; i++) {
    const question = prompt(`Ваш любимый жанр под номером ${i + 1}`);
    
    if (question !== '' && question !== null) {
      personalMovieDB.genres[i] = question;
    } else {
      i--;
    }
  }
}

writeYourGenres();



