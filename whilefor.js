"use strict";
////////ЦИКЛЫ
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

///////////////////// ФУНКЦИИ
/*
function learnJs(lang, callback) { //callback функция 
    console.log(`я учу: ${lang}`);
    callback();
}


function wellDone() {
    console.log("i`m done im ready!");
}

    learnJs("JS", wellDone);
    */

///////////////////////// массивы и циклы

    /*
 const arr = [1, 70, 4, 5, 3];
//console.log(arr.pop());

console.log(arr.sort(compareNum)); //сортировка от меньш. к больш.
function compareNum(a,b) {
    return a - b;
}


arr.push(10);
console.log(arr);

for (let i of  arr) { //for of
    console.log(i);
}

arr.forEach(function(item, i, arr) { //forEach
console.log(` index - ${i}, element ${item}, in array ${arr}`);
});
*/

///////////////////// ПЕРЕДАЧА данных, копирование
/*
function copy(mainObj) { // копирование обьекта
    let objCopy = {};

    let key;
    for(key in mainObj) {
        objCopy[key] = mainObj[key];
    }
    return objCopy;
}

const numbers = {
    a:2,
    b:5,
    c: {
        x:7,
        y:4
    }
};

const add = {
 z:13,
 p:32
};
console.log(copy(numbers));
console.log(numbers);

console.log(Object.assign(numbers,add));//метод для склейки обьектов
const myNewObj = Object.assign({}, add);
console.log(myNewObj);

const books = ['harry potter', 'lord of the rings', 'witcher'],
      films = ['constantine', 'matrix', 'friday 13'];

const culture = [...books, ...films, 'merlin menson', 'michel jackson'];
console.log(culture); //пример работы спреад оператора


function show (a, b, c, d, e, z) { // разбили массив на елементы и передали в ф-ю
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(d);
    console.log(e);
    console.log(z);
}
const retard = ['i', 'wish', 'i', 'where', 'a', 'bird' ];
show(...retard);

const sas =['a', 3,'y'];//копируем массив через спреад оператор
const newsas = [...sas];
console.log(newsas);
*/
////////// OOP
/*
const solder = {
    health: 400,
    armor: 100,
    sayHello: function() {
    console.log("Hello solders!");
    }
};

const john = {
    health: 100
};

Object.setPrototypeOf(john,solder); //установили что джон прототип солдата
console.log(john.armor);


const fighter = Object.create(solder);
fighter.sayHello();
console.log(fighter.health);
*/
/////////////
