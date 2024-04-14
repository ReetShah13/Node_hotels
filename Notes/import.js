const notes =require('./notes.js');
console.log('server file is avaliable');


var age = notes.age;

var result = notes.addnumber(age+18, 5);

console.log(age);
console.log(result);


//Code for another file which has to be imported:
// notes.js:
// console.log('notes page is loaded');

// var age = 25;
// const addnumber = function (a, b) {
//     return a + b;
// }
// module.exports = {
//     age,
//     addnumber
// }; 