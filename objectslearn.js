"use strict";

const options = { 
    name:'test',
    width: 1024,
    heigth: 1024,
    colors: {
        border: 'red',
        bg: 'black'
    },
 makeTest: function() {
    console.log("мой самодельный метод!");
 } 
};
/*
console.log(options.name);

delete options.name;
console.log(options);
*/
for (let key in options) { //перебираем свойства обьекта и их значения
    if (typeof(options[key]) === 'object') {
        for (let i in options[key]) {
            console.log(`свойство ${i} имеет значение ${options[key][i]}`);
        }
    } else {
        console.log(`свойство ${key} имеет значение ${options[key]}`);
    }
}

console.log(Object.keys(options)); //вывод массива с свойствами обьекта
console.log(Object.keys(options).length);//вывод кол-ва свойств в обьекте (вывод цифры длинны массива)

const {border, bg} = options.colors; //деструктуризация обьекта 
console.log(border);

