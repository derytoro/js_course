'use strict';

/* ====== SCOPING IN PRACTICE ======*/
/*
function calcAge(birthYear) {
  const age = 2037 - birthYear;
  //   console.log(firstName);
  //   console.log(output);

  function printAge() {
    let output = `${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      // Creating NEW variable with same name as outer scope's variable
      // const firstName = 'Steven';

      // Reassigning outer scope's variable
      output = 'NEW OUTPUT';

      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }
    // console.log(str); // WILL PRODUCE AN ERROR, const str cannot be access from outer if scope, but var it can.
    console.log(millenial);
    // console.log(add(2, 3)); // WILL PRODUCE AN ERROR IN STRICT MODE, in strict mode add() cannot be access from outer if scope, but without strict mode it can
    console.log(output);
  }
  printAge();

  return age;
  //   console.log(age);
}

const firstName = 'Derys';
calcAge(1991);

// console.log(calcAge(1991));
// console.log(age); // WILL PRODUCE AN ERROR, IT CAUSE age variable is not a global variable, it is in function calcAge scope
// printAge(); // WILL PRODUCE AN ERROR, IT CAUSE printAge() is not a global function, it is a child function of calcAge()
*/
/* ====== SCOPING IN PRACTICE ======*/

/* ====== HOISTING AND TDZ(Temporal Dead Zone) IN PRACTICE ======*/
/*
// Variables
// console.log(me);
// console.log(job);
// console.log(year);

var me = 'Jonas';
const job = 'teacher';
const year = 1991;

// Functions
console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));
// console.log(addArrow(2, 3));

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

const addArrow = (a, b) => a + b;

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x); // x is a window's property CHECK ON CONSOLE WITH TYPING window -> Enter.
console.log(y === window.y);
console.log(z === window.z);
*/
/* ====== HOISTING AND TDZ(Temporal Dead Zone) IN PRACTICE ======*/

/* ====== THIS IN PRACTICE ======*/

// console.log(this); // Refers to the window object

// const calcAge = function (birthYear) {
//   console.log(2037 - birthYear);
//   console.log(this); // Undefined in strict mode, otherwise window object
// };
// calcAge(1991);

// const calcAgeArrow = birthYear => {
//   console.log(console.log(2037 - birthYear));
//   console.log(this); // Refers to the window object
// };
// calcAgeArrow(1980);

// const jonas = {
//   year: 1991,
//   calcAge: function () {
//     console.log(2037 - this.year);
//     console.log(this); // Refers to the jonas object
//   },
// };
// jonas.calcAge(); // 46

// const matilda = {
//   year: 2017,
// };

// Copying calcAge() from jonas to matilda, check to the console by typing matilda -> enter.(it called method borrowing)
// matilda.calcAge = jonas.calcAge;
// matilda.calcAge(); // 20

// const f = jonas.calcAge; // It's not invoke a function, just copying calcAge from jonas to a variable f.
// f(); // UNDEFINED AND WILL PRODUCE AN ERROR TO this.year
// console.log(f);

/* ====== THIS IN PRACTICE ======*/

/* ====== REGULAR FUNCTION VS ARROW FUNCTION =====*/
// var firstName = 'Matilda'; // window object will create property called firstName with value is Matilda

// const jonas = {
//   firstName: 'Jonas',
//   year: 1991,
//   calcAge: function () {
//     console.log(this); // Refers to the jonas object
//     console.log(2037 - this.year);

//     // THIS WILL PRODUCE ERROR UNDEFINED OF THIS. BECAUSE THIS ONLY REFERS TO THE INNER isMillenial scope
//     // const isMillenial = function () {
//     //   console.log(this); // undefined
//     //   console.log(this.year >= 1981 && this.year <= 1996); // error
//     // };

//     // SOLUTION 1 = by adding variable with value of "this" that refers to the jonas object
//     // const self = this; // this refers to jonas object
//     // const isMillenial = function () {
//     //   console.log(self);
//     //   console.log(self.year >= 1981 && self.year <= 1996);
//     // };

//     // SOLUTION 2 = by using arrow func because arro func is refers this to the global object(in this case jonas object)
//     const isMillenial = () => {
//       console.log(this);
//       console.log(this.year >= 1981 && this.year <= 1996);
//     };
//     isMillenial();
//   },
//   greet: () => {
//     console.log(this); // this in arrow func refers to the window object not jonas object
//     console.log(`Hey ${this.firstName}`); // this.firstName is undefined, cause in window object there is no property called firstName
//   },
// };
// jonas.calcAge();
// // jonas.greet(); // Hey undefined
// // console.log(this.firstName); // UNDEFINED

// // arguments keyword
// const addExpr = function (a, b) {
//   console.log(arguments);
//   return a + b;
// };
// addExpr(2, 5);
// addExpr(2, 5, 8, 12);

// const addArrow = (a, b) => {
//   console.log(arguments); // will produce an error because arguments not equal to params
//   return a + b;
// };
// addArrow(2, 5, 6, 9); // will produce an error because arguments not equal to params

/* ====== REGULAR FUNCTION VS ARROW FUNCTION =====*/

/* ====== PRIMITIVES AND OBJECTS =====*/
let age = 30;
let oldAge = age;
age = 31;
console.log(age);
console.log(oldAge);

const me = {
  name: 'Jonas',
  age: 30,
};

const friend = me; // copying me object to friend
friend.age = 27;
console.log('Friend', friend);
console.log('Me', me);

// Primitives type
let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName, oldLastName);

// Object / reference type
const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};
const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';
console.log('Before marriage', jessica);
console.log('After marriage', marriedJessica);
// marriedJessica = {}; // it's not allowed

// Copying objects
const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Bob'],
};

// By using this technique Object.assign only works on the first level (not the deep clone)
const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Davis';
// console.log('Before marriage', jessica2);
// console.log('After marriage', jessicaCopy);

jessicaCopy.family.push('Mary');
jessicaCopy.family.push('John');
console.log('Before marriage', jessica2);
console.log('After marriage', jessicaCopy);
/* ====== PRIMITIVES AND OBJECTS =====*/
