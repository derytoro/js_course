/*
let js = "amazing";
if (js === "amazing") alert("Javascipt is badasss");

console.log(10+20+5-10);
console.log("Derys");
console.log(123);

let firstName = "Derys";
console.log(firstName);

let $function = 27;
let PI = 3.1415;
let pi = 3.1415;
*/
/*
let javascriptIdFun = true;
console.log(javascriptIdFun);

console.log(typeof true);
console.log(typeof javascriptIdFun);
console.log(typeof 23);
console.log(typeof 'Derys');

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);
*/

/* BASIC OPERATOR */
/* const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);

const firstName = 'Dery';
const lastName = 'Siswantoro';
console.log(firstName + ' ' + lastName);
*/

/*
// Assignment operator
let x = 10 + 5;
x += 10; // x = x + 10
x *= 4; // x = x * 4
x++;
x--;
x--;
console.log(x);
*/

/*
// Comparison operators
console.log(ageJonas > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;
console.log(now - 1991 > now - 2018);
*/

// Template literals
/*const firstName = 'Derys';
const job = 'programmer';
const birthYear = 1991;
const year = 2037;

const derys = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';
console.log(derys);

const derysNew = `I'm ${firstName} a ${year - birthYear} years old ${job} !`;
console.log(derysNew); */

/* ==================== */

// const age = 15;

// if (age >= 18) {
//     console.log('Sarah can start driving lincense 🚗');
// } else {
//     const yearLeft = 18 - age;
//     console.log(`Sarah is too young, Wait another ${yearLeft} years:)`);
// }

// /* ==================== */

// const birthYear = 1991;

// let century;
// if (birthYear <= 2000) {
//     century = 20;
// } else {
//     century = 21;
// }
// console.log(century);

/* ========== type conversion ========== */

// const inputYear = '1991';
// console.log(Number(inputYear), inputYear);
// console.log(Number(inputYear) + 18);

// console.log(Number('Jonas'));
// console.log(typeof NaN);

// console.log(String(23), 23);

// /* ========== type coercion ========== */
// console.log('I am ' + 23 + ' years old'); // plus sign will convert number to string.
// console.log('I am ' + '23' + ' years old'); // result will be the same as above, as a string.
// console.log('23' - '10' - 3); // minus sign will convert string to number.
// console.log('23' / '2'); // it will convert string to number and result is a number.

// let n = '1' + 1; // '11'
// n = n - 1; // 11 - 1
// console.log(n);

/* ========== truthy and falsy values ========== */
// 5 falsy values : 0, '', undefined, null, NaN
// console.log(Boolean(0));            // false
// console.log(Boolean(undefined));    // false
// console.log(Boolean('Jonas'));      // true
// console.log(Boolean({}));           // true
// console.log(Boolean(''));           // false

// const money = 0;
// if (money) {
//     console.log("Don't spend it all.");
// } else {
//     console.log("You should get a job!");
// }

// let height;
// if (height) {
//     console.log('YAY! Height is defiined');
// } else {
//     console.log('Height is UNDEFINED');
// }

/* ========== equality operators ========== */
// const age = 18;
// if (age === 18) console.log('You just became an adult (strict)');

// if (age == 18) console.log('You just became an adult (loose)');

// const favourite = prompt("What's your favourite number?");
// // const favourite = Number(prompt("What's your favourite number?"));
// console.log(favourite);
// console.log(typeof favourite); // string

// if (favourite == 23) {
//     console.log('Cool! 23 is an amaizing number!');
// }

/* ========== boolean logic ========== */
/* === AND === */
// const a = true && true; // true
// const b = true && false; // false
// const c = false && true; // false
// const d = false && false; // false

/* === OR === */
// const a = true || true; // true
// const b = true || false; // true
// const c = false || true; // true
// const d = false || false; // false

/* === NOT === */
// inverts true/false value

// const hasDriversLicense = true;
// const hasGoodVision = true;
// const isTired = true;

// console.log(hasDriversLicense && hasGoodVision); // false
// console.log(hasDriversLicense || hasGoodVision); // true
// console.log(!hasDriversLicense); // false

// if (hasDriversLicense && hasGoodVision) {
//     console.log('Sarah is able to drive!');
// } else {
//     console.log('Someone else should drive!');
// }

// console.log(hasDriversLicense && hasGoodVision && isTired); // false
// if (hasDriversLicense && hasGoodVision && isTired) {
//     console.log('Sarah is able to drive!');
// } else {
//     console.log('Someone else should drive!');
// }

/* ========== switch statement ========== */
const day = 'sunday';

switch (day) {
    case 'monday':
        console.log('Plan course structure');
        console.log('Go to coding meetup');
        break;
    case 'tuesday':
        console.log('Prepare theory videos');
        break;
    case 'wednesday':
    case 'thursday':
        console.log('Write code examples');
        break;
    case 'friday':
        console.log('Record videos');
        break;
    case 'saturday':
    case 'sunday':
        console.log('Enjoy the weekend :D');
        break;      
    default:
        console.log('Not a valid day!');
}

if (day === 'moday') {
    console.log('Plan course structure');
    console.log('Go to coding meetup');
} else if (day === 'tuesday') {
    console.log('Prepare theory videos');
} else if (day === 'wednesday' || day === 'thursday') {
    console.log('Write code examples');
} else if (day === 'friday') {
    console.log('Record videos');
} else if (day === 'saturday' || day === 'sunday') {
    console.log('Enjoy the weekend :D');
} else {
    console.log('Not a valid day!');
}

/* ========== ternary operator ========== */
const age = 23;
age >= 18 ? console.log('drink wine 🍷') : console.log('drink water 🥛');

const drink = age >= 18 ? 'wine 🍷' : 'water 🥛';
console.log(drink);

let drink2;
if (age >= 18) {
    drink2 = 'wine 🍷';
} else {
    drink2 = 'water 🥛';
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? 'wine 🍷' : 'water 🥛'}`);