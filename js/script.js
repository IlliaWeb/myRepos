"use strict"; //строгий режим !

let numberOfFilms ;//глобал. перем.

function start () {
 numberOfFilms = prompt('сколько фильмов вы уже посмотрели?','');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('сколько фильмов вы уже посмотрели?','');
    }
}
start();// ф-я задающая вопрос про кол-во просмотреных фильмов

const personalMovieDB = { //обьект с данными 
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
 
function rememberMyFilms () {
    for (let i = 0; i < 2; i++) {
        let a = prompt('Один из последних просмотренных фильмов?', ''),
            b = prompt('На сколько оцените его?', '');
          
        if (a != '' && b != '' && a != null && b != null && a.length < 50 ) {
            personalMovieDB.movies[a] = b; 
        } else {
            i--;
        }
    }
}
rememberMyFilms();//записывает и проверяет данные про фильмы

function writeYourGenres() { //записывает жанры пользователя
    for (let i = 1; i <=3 ; i++) {
        
        personalMovieDB.genres[i-1] = prompt(`Ваш любимый жанр под номером ${i}`);// i-1 потому что запись в массиве начинаеться с 0 
    }
}
writeYourGenres();

function detectPersonalLevel() {
    if (personalMovieDB.count <=10) {
        console.log("просмотрено довольном мало фильмов");
    } else if ( personalMovieDB.count > 10  &&  personalMovieDB.count <= 30 ) {
        console.log ("Вы классический зритель");
    } else if (personalMovieDB.count > 30 ){
        console.log ("Вы киноман");
    } else {
        console.log("ошибка");
    }
}
detectPersonalLevel();//оценивает уровень насмотренности 
/*
function showMyDB() { //показывает данные из обьекта в зависимости от значения приватности
    if (personalMovieDB.privat== false) {
       console.log(personalMovieDB); 
    } 
}*/

function showMyDB(hidden) {//показывает данные из обьекта в зависимости от значения приватности
    if (!hidden) {
        console.log(personalMovieDB);
    }
}
showMyDB(personalMovieDB.privat);
