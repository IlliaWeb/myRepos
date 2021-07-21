"use strict"; //строгий режим !!!
//let number = 5;
//alert ("Sas");
//const question = confirm ("Are you Sas?"); //вопрос да/нет
//const answer = prompt ("do tou like sass?", "sas is my life"); //вопрос с текстовым ответом от пользователя
//console.log(answer);

//const username = "Sanya";
//alert(`Hello,user ${username}`);// ${ } - интерполяция вместо конкатенации 


const numberOfFilms = +prompt('сколько фильмов вы уже посмотрели?','');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},//в свойствах пустой обьект
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('какой фильм вы смотрели последним?',''),
      b = prompt('во сколько балов оцените фильм (1-10)?',''),
      c = prompt('какой фильм вы смотрели последним?',''),
      d = prompt('во сколько балов оцените фильм (1-10)?','');
    
personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB); 


