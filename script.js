'use strict';
// ЗАДАЧА 1
// можно промт сделать числом
const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели', '');
// ЗАДАЧА 2
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false

};
// ЗАДАЧА 3
const a = prompt('Один из последних просмотренных фильмов?', ''),
      b = prompt('На сколько оцените его?', ''),
      c = prompt('Один из последних просмотренных фильмов?', ''),
      d = prompt('На сколько оцените его?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d; 

console.log(personalMovieDB);