// activating strict mode
// 'use strict';

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log('I can drive');

// // function
// function fruitProcessor(apples, oranges) {
//     console.log(apples, oranges);
//     const juice = `Juice with ${apples} apples and ${oranges} oranges`;
//     return juice;
// }
// const appleJuice = fruitProcessor(5,0);
// console.log(appleJuice);
// console.log(fruitProcessor(5,0));

// const appleOrangeJuice = fruitProcessor(2,4);
// console.log(appleOrangeJuice);

// Function declaration
// function calcAge1(birtYeah) {
//     return 2037 - birtYeah;
// }
// const age1 = calcAge1(1991); // if we move this variable before the function, it still works

// Function expression
// const calcAge2 = function (birtYeah) {
//     return 2037 - birtYeah;
// }
// const age2 = calcAge2(1991); // if we move this variable before the function, it doesnt work (function hoisting);
// console.log(age1, age2);

// // Arrow function
// const calcAge3 = birtYeah => 2037 - birtYeah;
// const age3 = calcAge3(1991);
// console.log(calcAge3);

// const yearsUntilRetirement = birtYeah => {
//     const age = 2037 - birtYeah;
//     const retirement = 65 - age;
//     return retirement;
// }
// console.log(yearsUntilRetirement(1991));

// const yearsUntilRetirement = (birtYeah, firstName) => {
//     const age = 2037 - birtYeah;
//     const retirement = 65 - age;
//     return `${firstName} retire in ${retirement} years`;
// }
// console.log(yearsUntilRetirement(1991, 'Jonas'));
// console.log(yearsUntilRetirement(1980, 'Bob'));

// functions calling other functions
// function cutFruitPieces(fruit) {
//     return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//     const applePieces = cutFruitPieces(apples);
//     const orangePieces = cutFruitPieces(oranges);

//     const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges`;
//     return juice;
// }
// console.log(fruitProcessor(3, 4));

// reviewing function - function calling another function with paramenter
// const calcAge = function (year) {
//     return 2037 - year;
// }

// const yearsUntilRetirement = function (birthYeah, firstName) {
//     // const age = 2037 - birthYeah;
//     const age = calcAge(birthYeah);
//     const retirement = 65 - age;

//     if (retirement > 0) {
//         console.log(`${firstName} retires is ${retirement} years`);
//         return retirement; // return will immediately terminate a function execution, so if we call return before console. it will never execute console.log
//     } else {
//         console.log(`${firstName} is already retired 🥂`);
//         return -1; // return will immediately terminate a function execution, so if we call return before console. it will never execute console.log
//     }
// }
// console.log(yearsUntilRetirement(1991, 'Derys'));
// console.log(yearsUntilRetirement(1970, 'Mbah'));

// Introduction array
// const friends = ['Michael', 'Steven', 'Jacob'];
// console.log(friends);

// const years = new Array(1991, 1984, 2088, 2020);

// Basic array operation/method
// add elements
// const newLength = friends.push('Jay'); // add a element to the last of array
// console.log(friends);
// console.log(newLength);

// friends.unshift('Walker'); // add element to the begining of array
// console.log(friends);

// // remove elements
// friends.pop(); // remove last element of array
// const popped = friends.pop();
// console.log(popped);
// console.log(friends);

// friends.shift(); // remove first element of array
// console.log(friends);

// console.log(friends.indexOf('Steven')); // return number of index

// console.log(friends.includes('Steven')); // return true if Steven is in array
// console.log(friends.includes('Markus')); // return false if Markus is not in array

// if (friends.includes('Steven')) {
//     console.log('You have a friend called Steven');
// }

// Introduction to Object
// const jonasArray = [
//     'Jonas',
//     'Berkermann',
//     2037 - 1991,
//     'teacher',
//     ['Michael', 'Peter', 'Steven']
// ];

// const jonas = {
//     firstName: 'Jonas',
//     lastName: 'Beckermann',
//     age: 2037 - 1991,
//     job: 'teacher',
//     friends: ['Michael', 'Peter', 'Steven']
// };

// Dot vs Bracket notation
// console.log(jonas);
// console.log(jonas.lastName); // member access precedence
// console.log(jonas['lastName']); // computed member access precedence

// const nameKey = 'Name';
// console.log(jonas['first' + nameKey]);
// console.log(jonas['last' + nameKey]);

// const interestedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job and friends'); // will return string

// if (jonas[interestedIn]) {
//     console.log(jonas[interestedIn]);
// } else {
//     console.log('Wrong request! Choose between firstName, lastName, age, job and friends');
// }

// add new property (location & twitter ) into jonas array
// jonas.location = 'New Zealand';
// jonas['twitter'] = '@jonassexyman';
// console.log(jonas);

// Challenge
// "Jonas has 3 friends, and his best friend is called Michael"
// console.log(`${jonas.firstName} has ${jonas.friends.length}, and his best friend is called ${jonas.friends[0]}`);

// Object methods
const jonas = {
  firstName: "Jonas",
  lastName: "Beckermann",
  birthYeah: 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
  hasDriversLicense: false,

  // calcAge: function(birthYeah) {
  //     return 2037 - birthYeah;
  // }

  // calcAge: function() {
  //     console.log(this);
  //     return 2037 - this.birthYeah;
  // }

  calcAge: function () {
    this.age = 2037 - this.birthYeah; // will create new property called age into jonas object
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-year old ${
      this.job
    }, and he has ${this.hasDriversLicense ? "a" : "no"} driver's license`;
  },
};

// console.log(jonas.calcAge(1991));
// console.log(jonas['calcAge'](1991));
// console.log(jonas.calcAge());
// console.log(jonas.age);

// Challenge
// "Jonas is 46-year old teacher, and he has a driver's license"
// console.log(`${jonas.firstName} is ${jonas.age}-year old ${jonas.job}, and he ${jonas.isDriversLicense ? `has driver's licences` : `has not driver's licences`}`);
console.log(jonas.getSummary());

// Iteration : The for loop
// for (let rep = 1; rep <= 10; rep++) {
//     console.log(`Lifting weights repetiotion ${rep} ❤`);
// }

// Looping arrays, breaking, and continuing
const jonasArray = [
  "Jonas",
  "Berkermann",
  2037 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
];
const types = [];

for (let i = 0; i < jonasArray.length; i++) {
  // Reading from jonas array
  console.log(jonasArray[i], typeof jonasArray[i]);

  // Filling types array
  // types[i] = typeof jonas[i];
  types.push(typeof jonasArray[i]);
}
console.log(types);

// ============================================

const years = [1991, 2007, 1969, 2020];
const ages = [];
for (i = 0; i < years.length; i++) {
  ages.push(2037 - years[i]);
}
console.log(ages);

// ============================================

// continue and break
console.log("--- ONLY STRINGS ---");
for (let i = 0; i < jonasArray.length; i++) {
  if (typeof jonasArray[i] !== "string") continue;

  console.log(jonasArray[i], typeof jonasArray[i]);
}

console.log("--- BREAK WITH NUMBER ---");
for (let i = 0; i < jonasArray.length; i++) {
  if (typeof jonasArray[i] === "number") break;

  console.log(jonasArray[i], typeof jonasArray[i]);
}

// Looping backwards and loops in loops
// 0, 1, ..., 4
// 4, 3, ..., 0
console.log("--- LOOPS BACKWARD ---");
for (let i = jonasArray.length - 1; i >= 0; i--) {
  console.log(i, jonasArray[i]);
}

console.log("--- LOOPS IN LOOPS ---");
for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`---------- Starting exercise ${exercise}`);
  for (let rep = 1; rep < 6; rep++) {
    // console.log(`Lifting weight repetition ${rep} 🏀`);
    console.log(`Exercise ${exercise}: Lifting weight repetition ${rep} 🏀`);
  }
}

console.log("--- WHILE LOOPS ---");
let rep = 1;
while (rep <= 10) {
  console.log(`WHILE: Lifting weights repetition ${rep} ❤`);
  rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;
// console.log(dice);
while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log("Loop is about to end...");
}
