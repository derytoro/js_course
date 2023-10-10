'use strict';

/* DEFAULT PARAMETERS */
/*
const bookings = [];

const createBooking = function (
  flightName,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  //   Set default values in ES5
  //   numPassengers = numPassengers || 1;
  //   price = price || 199;

  const booking = {
    flightName,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 2);
createBooking('LH123', 5);

// Skipping second parameter with undefined
createBooking('LH123', undefined, 1000);
*/
/* DEFAULT PARAMETERS */

/* HOW PASSING ARGUMENTS WORKS: PRIMITIVE VALUE VS REFERENCE */
// const flight = 'LH234';
// const jonas = {
//   name: 'Jonas Schmedtmann',
//   passport: 23546861842,
// };

// const checkIn = function (flightNum, passenger) {
//   flightNum = 'LH999';
//   passenger.name = 'Mr. ' + passenger.name;

//   if (passenger.passport === 23546861842) {
//     alert('Check In');
//   } else {
//     alert('Wrong passport');
//   }
// };

// checkIn(flight, jonas);
// console.log(flight);
// console.log(jonas);

// Is the same as doing...
// const flightNum = flight;
// const passenger = jonas;

// const newPassport = function (person) {
//   person.passport = Math.trunc(Math.random() * 1000000000);
// };

// newPassport(jonas);
// checkIn(flight, jonas);
/* HOW PASSING ARGUMENTS WORKS: PRIMITIVE VALUE VS REFERENCE */

/* FUNCTIONS ACCEPTING CALLBACK FUNCTIONS */
const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};
// console.dir(upperFirstWord); // It used for log function's properties name

// Higher-order function
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);

  console.log(`Transformed by ${fn.name}`);
  // console.dir(fn); // It used for log function's properties name
};
transformer('Javascript is the best', upperFirstWord);
console.log('=================================');
transformer('Javascript is the best', oneWord);

// JS uses callback all the time
// const high5 = function () {
//   console.log('👌');
// };

// document.body.addEventListener('click', high5);
// ['Jonas', 'Alice', 'Adam'].forEach(high5);
/* FUNCTIONS ACCEPTING CALLBACK FUNCTIONS */

/* FUNCTIONS RETURNING FUNCTIONS */
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

// OPTION 1 : CLOSURE
const greeterHey = greet('Hey'); // Now the value of greeterHey is a function
greeterHey('Jonas'); // Then we can call greeterHey as a function with parameter
greeterHey('Steven');

// OPTION 2 : CLOSURE : We also can invoke the function like this
greet('Hello')('Maria');

// OPTION 3 : CLOSURE : Using arrow function
const greetArr = greeting => name => console.log(`${greeting} ${name}`);
greetArr('Hi')('Kimmich');
/* FUNCTIONS RETURNING FUNCTIONS */

/* THE CALL AND APPLY METHODS: use 'this keyword in in another object function */
// const lufthansa = {
//   airline: 'Lufthansa',
//   iataCode: 'LH',
//   bookings: [],
//   book(flightNum, name) {
//     console.log(
//       `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
//     );

//     this.bookings.push({
//       flight: `${this.iataCode}${flightNum}`,
//       name,
//     });
//   },
// };

// lufthansa.book(239, 'Jonas Siswantoro');
// lufthansa.book(635, 'Martha Sachumann');
// // console.log(lufthansa);

// const eurowings = {
//   airline: 'Eurowings',
//   iataCode: 'EW',
//   bookings: [],
// };

// const book = lufthansa.book;

// DOES NOT WORK : will returns an error cause book will become a regular function, and this keyword will refers undefined in regular function
// book(23, 'Sarah Williams');

// Call method
// book.call(eurowings, 23, 'Sarah Williams');
// console.log(eurowings);

// book.call(lufthansa, 239, 'Mary Cooper');
// console.log(lufthansa);

// const swiss = {
//   airline: 'Swiss Air Lines',
//   iataCode: 'LX',
//   bookings: [],
// };

// book.call(swiss, 583, 'Henrik Rassmussen');
// console.log(swiss);

// Apply method
// const flightData = [583, 'George Vooper'];
// book.apply(swiss, flightData);
// console.log(swiss);

// OR WE CAN WRITE LIKE THIS WITH call()
// book.call(swiss, ...flightData);
/* THE CALL AND APPLY METHODS */

/* THE BIND METHOD */
// book.call(eurowings, 23, 'Sarah Williams) : we can set multiple parameters in call func. we also can set those in bind()
// const bookEW = book.bind(eurowings); // this keyword set into eurowings
// const bookLH = book.bind(lufthansa);
// const bookLX = book.bind(swiss);

// bookEW(23, 'Steven Williamss');

// const bookEW23 = book.bind(eurowings, 23345); // this one is only need a name as a parameter so we can do like this
// bookEW23('Jonas Marks Williams');
// bookEW23('Martha Cooper');

// WITH EVENT LISTENER
// lufthansa.planes = 30;
// lufthansa.buyPlane = function () {
//   console.log(this);

//   this.planes++;
//   console.log(this.planes);
// };

// We have to set bind() and pointing it into an object "lufthansa" ('click', lufthansa.buyPlane.bind(lufthansa) to avoid an error, cause since 'this' keyword will pointing it self to button element ".buy" when we invoke into event listener
// document
//   .querySelector('.buy')
//   .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// PARTIAL APPLICATION : without refering 'this' keyword into an object
// const addTax = (rate, value) => value + value * rate;
// console.log(addTax(0.1, 200));

// const addVAT = addTax.bind(null, 0.23);
// addVat = value => value + value * 0.23;
// console.log(addVAT(100));
// console.log(addVAT(23));

// RE-WRITE code above "const addVAT = addTax.bind(null, 0.23);" with closure or functions returning another functions
// const addTaxRate = function (rate) {
//   return function (value) {
//     return value + value * rate;
//   };
// };
// const addVAT2 = addTaxRate(0.23);
// console.log(addVAT2(100));
// console.log(addVAT2(23));
/* THE BIND METHOD */

/*  CODING CHALENGE #1 : POLLING*/
// const poll = {
//   question: 'What is your favourite programming language>',
//   options: ['0: Javascript', '1: Python', '2: Rust', '3: C++'],
//   // This generates [0,0,0,0], More in the next section
//   answers: new Array(4).fill(0),

//   registerNewAnswer() {
//     // Get answer
//     const answer = Number(
//       prompt(
//         `${this.question}\n${this.options.join('\n')}\n(Write option number)`
//       )
//     );
//     console.log(answer);

//     // Register answer
//     typeof answer === 'number' &&
//       answer < this.answers.length &&
//       this.answers[answer]++;

//     // console.log(this.answers);
//     this.displayResults();
//     this.displayResults('string');
//   },

//   displayResults(type = 'array') {
//     if (type === 'array') {
//       console.log(this.answers);
//     } else if (type === 'string') {
//       // Poll result are 13, 2, 4, 1
//       console.log(`Poll results are ${this.answers.join(', ')}`);
//     }
//   },
// };
// poll.registerNewAnswer();
// document
//   .querySelector('.poll')
//   .addEventListener('click', poll.registerNewAnswer.bind(poll));

// poll.displayResults.call({ answers: [5, 2, 3] }, 'string');
// poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, 'string');
// [5, 2, 3]
// [1, 5, 3, 9, 6, 1]
/*  CODING CHALENGE #1 */

/* IIFE */
// const runOnce = function () {
//   console.log('This will never run again');
// };
// runOnce();

// IIFE
// (function () {
//   console.log('This will never run again');
//   const isPrivate = 23;
// })();
// console.log(isPrivate);

// (() => console.log('This will ALSO never run again'))();
/* IIFE */

/* CLOSURES */
/* 
1: A closure is the closed-over variable env of execution context in which a function was created, even after that execution context is gone
2: A closure gives a function access to all the variables of its parent function, even after that parent function has returned. The function keeps a reference to its outer scope, which preeserves the scope chain throughout time
3: A closure makes sure that a function doesn't loose connection to variables that existed at the function's birth place
4: A closure is like a backpack that a function carries around wherever it goes. This backpack has all the variables that were present in the environment where the function was created
 */
const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();
booker();
booker();
booker();

console.dir(booker);
/* CLOSURES */

/* MORE CLOSURES */

// Example 1
let f;

const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};

g();
f();
console.dir(f);

// Re-assigning f function
h();
f();
console.dir(f);

// Example 2: closure has first priority than scope chain
// const boardPassengers = function (n, wait) {
//   const perGroup = n / 3; // it will be first option to execute

//   setTimeout(function () {
//     console.log(`We are now boarding all ${n} passengers`);
//     console.log(`There are 3 groups. each with ${perGroup} passengers`);
//   }, wait * 1000);

//   console.log(`Will start boarding in  ${wait} seconds`);
// };

// const perGroup = 1000; // it will be second option to execute
// boardPassengers(180, 3);

/* MORE CLOSURES */

/* CODING CHALLENGE #2: CLOSURE */
(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';

  document.querySelector('body').addEventListener('click', function () {
    header.style.color = 'blue';
  });
})();

/* CODING CHALLENGE #2 */
