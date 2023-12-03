'use strict';

const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
  start: function() {
    personalMovieDB.count = +prompt('Сколько фильмов вы посмотрели?', '');
    
    while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
      personalMovieDB.count = +prompt('Сколько фильмов вы посмотрели?', '');
    }
  },

  rememberMyFilms: function() {
    for (let i = 0; i < 2; i++) {
      let a = prompt('Последний просмотренный фильм?', '').trim(),
          b = prompt('На сколько оцените его?','').trim();
      if (a !== '' && a !== null && a.length < 50 && b !== '' && b !== null) {
        console.log('done');
        personalMovieDB.movies[a] = b;
      } else {
        console.log('error');
        i--;
      }
    } 
  },

  detectPersonalLevel: function() {
    if (personalMovieDB.count < 10) {
      console.log('Просмотренно слишком мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
      console.log('Вы класический зритель');
    } else if (personalMovieDB.count > 30) {
      console.log('Вы киноман!');
    } else {
      console.log('Произошла ошибка');
    }  
  },

  showMyDB: function(hidde) {
    if (!hidde) {
      console.log(personalMovieDB);
    }
  },

  toggleVisibleMyDB: function() {
    return (personalMovieDB.privat) ? 
    personalMovieDB.privat = false :
    personalMovieDB.privat = true;
  },
  
  writeYourGenres: function() {
    for (let i = 0; i < 3; i++) {
      const question = prompt(`Ваш любимый жанр под номером ${i + 1}`).toLowerCase().trim();
      
      if (question !== '' && question !== null) {
        personalMovieDB.genres[i] = question;
      } else {
        i--;
      }
    }
    personalMovieDB.genres.forEach((item, i) => {
      console.log(`Любимый жанр #${i + 1} - это ${item}`);
    });
  },

};

