/* 
PRIMITIVE DATA TYPES

Number : floating points number, used for decimal and integers

String : Sequence of characters, used for text

Boolean : Logical type that can be only be true or false, used for taking decision

Undefined : Value taken by a variable that is not yet defined ('empty value')

Null : Also mean empty value

Symbol(ES2015) : Value that is unique and cannot be changed

BigInt(ES2020): Large integers than the Number type can hold
*/

/* PART 1 */
/*let country = "Indonesia";
let continent = "Asia";
let population = 10;
let isIsland = true;
let language;

console.log(country);
console.log(continent);
console.log(population);

console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);
*/

/* CHALENGE 1 
Marks weighs 78 kg and is 1.69 m tall.
John weighs 92 kg and is 1.95 m tall.
Create a boolean variable markHigherBMI containing information about whether Mark has a higher BMI than John. Log it to the console too.
let massMark = 78;
let heightMark = 1.69;
let BMIMark = massMark / (heightMark * heightMark);

let massJohn = 92;
let heightJohn = 1.95;
let BMIJohn = massJohn / (heightJohn * heightJohn);

console.log(BMIMark, BMIJohn);

let markHigherBMI = BMIMark > BMIJohn;
console.log(markHigherBMI);
*/

// CHALENGE 2
// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

// const BMIMark = massMark / (heightMark * heightMark);
// const BMIJohn = massJohn / (heightJohn * heightJohn);
// console.log(BMIMark, BMIJohn);

// if (BMIMark > BMIJohn) {
//     console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`);
// } else {
//     console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`);
// }

// CHALENGE 3
const scoreDolphins = (97 + 112 + 89) / 3;
const scoreKoalas = (109 + 95 + 75) / 3;
console.log(scoreDolphins, scoreKoalas);

// if (scoreDolphins > scoreKoalas) {
//     console.log('Dolphins win the trophy');
// } else if (scoreKoalas > scoreDolphins) {
//     console.log('Koalas win the trophy');
// } else if (scoreDolphins === scoreKoalas) {
//     console.log('Both win the trophy');
// }

if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
    console.log('Dolphins win the trophy 🏆');
} else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
    console.log('Koalas win the trophy 🏆');
} else if (scoreDolphins === scoreKoalas && scoreDolphins >= 100 && scoreKoalas >= 100) {
    console.log('Both win the trophy 🏆');
} else {
    console.log('No one wins the trophy 😭');
}

// CHALENGE 4
const bill = 275;
let tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
console.log(`The bill was ${bill} , the tip was ${tip}, and the total value ${bill + tip}`);

// let totalBill;
// if (bill >= 50 && bill <= 300) {
//     console.log(`The bill was ${bill} , the tip was ${tip}, and the total value ${bill + tip}`);
// } else {
//     console.log(`The bill was ${bill} , the tip was ${tip}, and the total value ${bill + tip}`);
// }