"use strict"; //строгий режим !!!
//let number = 5;
//alert ("Sas");
//const question = confirm ("Are you Sas?"); //вопрос да/нет
//const answer = prompt ("do tou like sass?", "sas is my life"); //вопрос с текстовым ответом от пользователя
//console.log(answer);

//const username = "Sanya";
//alert(`Hello,user ${username}`);// ${ } - интерполяция вместо конкатенации 

let numberOfFilms ;

function start () {
 numberOfFilms = +prompt('сколько фильмов вы уже посмотрели?','');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('сколько фильмов вы уже посмотрели?','');
    }
}

start();// ф-я задающая вопрос про кол-во просмотреных фильмов

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},//в свойствах пустой обьект
    actors: {},
    genres: [],
    privat: false
};
 
for (let i = 0; i < 2; i++) {
    let a = prompt('Один из последних просмотренных фильмов?', ''),
        b = prompt('На сколько оцените его?', '');
      
    if (a != '' && b != '' && a != null && b != null && a.length < 50 ) {
        personalMovieDB.movies[a] = b; 
    } else {
        i--;
    }
}
/*
let z = 0;
while (z<2) {
    let a = prompt('Один из последних просмотренных фильмов?', ''),
        b = prompt('На сколько оцените его?', '');
      
    if (a != '' && b != '' && a != null && b != null && a.length < 50 ) {
        personalMovieDB.movies[a] = b; 
    } else {
        z--;
    }
    z++;
}

do {
    let a = prompt('Один из последних просмотренных фильмов?', ''),
        b = prompt('На сколько оцените его?', '');
  
if (a != '' && b != '' && a != null && b != null && a.length < 50 ) {
    personalMovieDB.movies[a] = b; 
} else {
    z--;
}
z++;

} while (z<2);
*/    

if (personalMovieDB.count <=10) {
    console.log("просмотрено довольном мало фильмов");
} else if ( personalMovieDB.count > 10  &&  personalMovieDB.count <= 30 ) {
    console.log ("Вы классический зритель");
} else if (personalMovieDB.count > 30 ){
    console.log ("Вы киноман");
} else {
    console.log("ошибка");
}

console.log(personalMovieDB); 


