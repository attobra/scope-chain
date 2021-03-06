'use strict';

// function calcAge(birthYear) {
//   const age = 2037 - birthYear;

//   function printAge() {
//     const output = `${firstName}, You are ${age} born in ${birthYear} `;
//     console.log(output);

//     if (birthYear >= 1991 && birthYear <= 1996) {
//       const str = `Oh, and you are a millenial, ${firstName}`;
//       console.log(str);
//     }
//   }

//   printAge();
//   return age;
// }

// const firstName = 'Jonas';
// calcAge(1991);

///////////////
//HOISTING
//////////////
// //will work
// console.log(addDecl(2, 3));
// //will give error
// console.log(addExpr(2, 3));
// //will be undefined
// console.log(addArrow(2, 3));

// //will work
// function addDecl(a, b) {
//   return a + b;
// }
// //will give error because of hoisting of const or let
// //will return not a function
// var addExpr = function (a, b) {
//   return a + b;
// };
// //will return undefined because of VAR
// const addArrow = (a, b) => {
//   return a + b;
// };

///////////
//here numproducts is UNDEFINED because of Hoisting
//if not 10 then deleteshoppingcart
// console.log(numProducts);
// if (!numProducts) deleteShoppinCart();

// var numProducts = 10;

// function deleteShoppinCart() {
//   console.log('all products deleted');
// }

/////////////////////////
//THIS
//////////////////////////
//this is undefined
// const calcAge = function (birthYear) {
//   console.log(2037 - birthYear);
//   console.log(this);
// };

// calcAge(1991);
// //global scope window, outer parent
// const calcAgeArrow = birthYear => {
//   console.log(2037 - birthYear);
//   console.log(this);
// };

// calcAgeArrow(1991);

// const nora = {
//   year: 1987,
//   calcAge: function () {
//     console.log(this);
//     console.log(2037 - this.year);
//   },
// };

// nora.calcAge();

// const matilda = {
//   year: 2017,
// };

// matilda.calcAge = nora.calcAge;
// matilda.calcAge();

// var firstName = 'Nora';
// const jonas = {
//   firstName: 'Jonas',
//   year: 1991,
//   calcAge: function () {
//     console.log(this);
//     console.log(2021 - this.year);
//     //solution1
//     // const self = this; //self or that
//     // const isMillenial = function () {
//     //   console.log(self.year >= 1981 && self.year <= 1996);
//     // };

//     //solution 2
//     const isMillenial = () => {
//       console.log(this.year >= 1981 && this.year <= 1996);
//     };
//     isMillenial();
//   },

//   greet: () => {
//     console.log(this);
//     console.log(`Hey, is your name ${this.firstName} ?`);
//   },
// };
// jonas.calcAge();
// jonas.greet();

/////////////////////////////
//PRIMITIVE AND REFERENCE(object) VALLUES

let lastName = 'Williams';
let oldLastName = 'Williams';
lastName = 'Davis';
console.log(lastName, oldLastName);

const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};

const marriedJessica = Object.assign({}, jessica);
marriedJessica.lastName = 'Davis';
console.log('before marriage:', jessica);
console.log('After marriage:', marriedJessica);
