"use strict"; //строгий режим !

const box = document.getElementById("box");//получаем через id
console.log(box);

const btns = document.getElementsByTagName("button");//получаем через тег
console.log(btns);

const circle = document.getElementsByClassName("circle");//получаем через имя класса
console.log(circle);

const hearts = document.querySelectorAll(".heart");//получаем тоже через имя класса
hearts.forEach(item => { //foreach работает только с queruSelector(All) 
console.log(item);
});

const oneHeart = document.querySelector(".heart");//получаем первый подходящий элемент 
console.log(oneHeart);


/*
const personalMovieDB = { //обьект с данными 
    count:0,
    movies: {},
    actors: {},
    genres: [],
    privat: true,

    start: function() { //задаём вопрос про кол во фильмов, проверяем ответ
        personalMovieDB.count = prompt('сколько фильмов вы уже посмотрели?','');
       
           while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('сколько фильмов вы уже посмотрели?','');
           }
       },
    rememberMyFilms: function() {//записывает и проверяет данные про фильмы
      for (let i = 0; i < 2; i++) {
           let a = prompt('Один из последних просмотренных фильмов?', ''),
               b = prompt('На сколько оцените его?', '');
          
            if (a != '' && b != '' && a != null && b != null && a.length < 50 ) {
              personalMovieDB.movies[a] = b; 
          } else {
              i--;
          }
      }
    },  
    writeYourGenres: function() { //записывает жанры пользователя
        for (let i = 1; i < 2 ; i++) {    
       
        let a = prompt('введите ваши любимые жанры через запятую').toLowerCase();
        if (a === '' && a === null) {
            i--;
        } else {
            personalMovieDB.genres = a.split(", ");
            personalMovieDB.genres.sort();
        }  
        
        personalMovieDB.genres.forEach(function(item, i) {
             console.log(`Любимый жанр ${i+1} - это ${item}  `); // i-индекс, item-елемент в массиве,  arr-сам массив
        });
     }
    },
    detectPersonalLevel: function () {//оценивает уровень насмотренности 
        if (personalMovieDB.count <=10) {
            console.log("просмотрено довольном мало фильмов");
        } else if ( personalMovieDB.count > 10  && personalMovieDB.count <= 30 ) {
            console.log ("Вы классический зритель");
        } else if (personalMovieDB.count > 30 ){
            console.log ("Вы киноман");
        } else {
            console.log("ошибка");
        }
    },
    toggleVisibleMyDB: function() {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },
    showMyDB: function (hidden) {//показывает данные из обьекта в зависимости от значения приватности
        if (!hidden) {
            console.log(personalMovieDB);
        }
    }
    
};
*/

 /*
personalMovieDB.start();
personalMovieDB.rememberMyFilms();
personalMovieDB.writeYourGenres();
personalMovieDB.detectPersonalLevel();
personalMovieDB.toggleVisibleMyDB();
personalMovieDB.showMyDB(personalMovieDB.privat);
*/