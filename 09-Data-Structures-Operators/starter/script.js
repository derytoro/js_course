'use strict';

// Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  orderDelivery: function ({ starterIndex, mainIndex, time, address }) {
    // console.log(obj);
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  // orderDelivery: function ({
  //   starterIndex = 1, // with default value
  //   mainIndex = 0,
  //   time = '20:00',
  //   address,
  // }) {
  //   // console.log(obj);
  //   console.log(
  //     `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
  //   );
  // },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1} ${ing2} and ${ing3}`
    );
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

/* DESTRUCTURING ARRAY */
// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];
// console.log(a, b, c);

// const [x, y, z] = arr;
// console.log(x, y, z);
// console.log(arr);

// let [main, secondary] = restaurant.categories; // Italian Pizzeria
// console.log(main, secondary);

// SKIP ARRAY ELEMENT
// const [first, , second] = restaurant.categories; // Italian Vegetarian
// console.log(first, second);

// SWITCHING VARIABLES from Italian Pizzeria to Pizzeria Italian
// Solution 1
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

// Solution 2 with destructuring
// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// RECEIVE 2 RETURN VALUES FROM A FUNCTION
// console.log(restaurant.order(2, 0));
// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);

// Nested destructuring
// const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);
// const [i, , [j, k]] = nested;
// console.log(i, j, k);

// Default values
// const [p, q, r] = [8, 9];
// console.log(p, q, r); // 8 9 undefined
// const [p = 1, q = 1, r = 1] = [8, 9];
// console.log(p, q, r); // 8 9 1

/* DESTRUCTURING ARRAY */

/* DESTRUCTURING OBJECT */
const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// Nested objects
// const {
//   fri: { open, close },
// } = openingHours;
// console.log(open, close); // 11 23

// const {
//   fri: { open: o, close: c },
// } = openingHours;
// console.log(o, c);

// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// console.log(restaurantName, hours, tags);

// Default values
// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// Mutating variables
// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };
// ({ a, b } = obj);
// console.log(a, b); // 23 7

// restaurant.orderDelivery({
//   time: '22:30',
//   address: 'Via del Sole, 21',
//   mainIndex: 2,
//   starterIndex: 2,
// });

// restaurant.orderDelivery({
//   address: 'Via del Sole, 21',
//   starterIndex: 1,
// });

/* DESTRUCTURING OBJECT */

/* SPREAD OPERATOR */
// const arr = [7, 8, 9];
// const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badNewArr);

// const newArr = [1, 2, ...arr];
// console.log(newArr); // Array(5) [ 1, 2, 7, 8, 9 ]

// console.log(...newArr); // 1 2 7 8 9

// const newMenu = [...restaurant.mainMenu, 'Nasi Padang'];
// console.log(newMenu);

// // Copy array
// const mainMenuCopy = [...restaurant.mainMenu];

// // Join 2 arrays or more
// const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(menu);

// // Iterables: array, strings, maps, sets, NOT objects
// const str = 'Jonas';
// const letters = [...str, '', '.S'];
// console.log(letters); // [ "J", "o", "n", "a", "s", "", ".S" ]
// console.log(...str); // J o n a s
// console.log(`${...str} Schmedtmann`);

// const ingredients = [
//   prompt("Let's make pasta! Ingredient 1?"),
//   prompt('Ingredient 2?'),
//   prompt('Ingredient 3?'),
// ];
// console.log(ingredients);

// restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
// restaurant.orderPasta(...ingredients);

// Objects
// const newRestaurant = { foundedIn: 1991, ...restaurant, founder: 'Hakan' };
// console.log(newRestaurant);

// Not copying an object
// const restaurantCopy = { ...restaurant };
// restaurantCopy.name = 'Ristoranto Roma';
// console.log(restaurantCopy.name); // Ristoranto Roma
// console.log(restaurant.name); // Classico Italiano

// Copying an object
// const restaurantCopy = restaurant;
// restaurantCopy.name = 'Ristoranto Roma';
// console.log(restaurantCopy.name); // Ristoranto Roma
// console.log(restaurant.name); // Ristoranto Roma

/* SPREAD OPERATOR */

/* REST PATTERN AND PARAMETERS */

// 1. Destructuring
// SPREAD packing arrays, because on RIGHT side of =
// const arr = [1, 2, ...[3, 4]];
// console.log(arr);

// REST unpacking arrays, because on LEFT side of =
// const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a, b, others);

// const [pizza, risotto, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];
// console.log(pizza, risotto, otherFood);

// Objects
// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(sat);
// console.log(weekdays);

// 2. Functions
// const add = function (...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
//   }
//   console.log(sum);
// };

// add(2, 3);
// add(5, 3, 7, 2);
// add(8, 2, 5, 3, 2, 1, 4);

// const x = [23, 5, 7];
// add(...x);
// console.log(x);

// restaurant.orderPizza('mushrooms', 'onions', 'olives', 'spinach');
// restaurant.orderPizza('mushrooms');
/* REST PATTERN AND PARAMETERS */

/* SORT CIRCUITING && and || */
// undefined, empty_string and 0 are a falsy value
// console.log('---- OR ----');
// console.log(3 || 'Jonas'); // 3
// console.log('' || 'Jonas'); // Jonas
// console.log(true || 0); // true
// console.log(undefined || null); // null

// console.log(undefined || 0 || '' || 'Hello' || 23 || null); // Hello

// restaurant.numGuests = 23;
// const guest1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guest1);

// const guest2 = restaurant.numGuests || 10;
// console.log(guest2);

// console.log('---- AND ----');
// console.log(0 && 'Jonas');
// console.log(7 && 'Jonas');
// console.log('Hello' && 23 && null && 'jonas');

// Practice example 1
// if (restaurant.orderPizza) {
//   restaurant.orderPizza('mushroom', 'spinach');
// }

// Practice example 2
// restaurant.orderPizza && restaurant.orderPizza('mushroom', 'spinach');

// The Nullish Coalescing Operator (??)
// restaurant.numGuests = 0;
// const guests = restaurant.numGuests || 10;
// console.log(guests);

// Nullish: null and undefined (NOT 0 or '')
// const guestCorrect = restaurant.numGuests ?? 10;
// console.log(guestCorrect);

// Logical Assignment Operator
/*
const rest1 = {
  name: 'Capri',
  // numGuests: 20,
  numGuests: 0,
};

const rest2 = {
  name: 'La Piazza',
  owner: 'Giovanni Rossi',
};
*/

// OR assignment operator
// Way 1:
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;
// Way 2: This way will be the same as above examples
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

// Nullish assignment operator (null or undefined)
// rest1.numGuests ??= 10;
// rest2.numGuests ??= 10;

// AND assignment operator
// rest1.owner = rest1.owner && '<ANONYMOUS>';
// rest2.owner = rest2.owner && '<ANONYMOUS>';
// rest1.owner &&= '<ANONYMOUS>';
// rest2.owner &&= '<ANONYMOUS>';

// console.log(rest1);
// console.log(rest2);

/* SORT CIRCUITING && and || */

/* CHALLENGE #1*/
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

/*
1. Create one player array for each team (variables 'players1' and 'players2')

2. The first player in any player array is the goalkeeperand the others are field players. For Bayern Munich (team1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players

3. Create an array 'allPlayers' containing all players of both teams (22 players)

4. During the game, Bayern Munich (team1) used 3 subtitute players. So create a new array ('playersFinal') containing all the original team1 players plus "Thiago", "Coutinho", "Perisic"

5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw', and 'team2')

6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and print each of them to the console, along with the number of goals who were scored (number of player names passed in)

7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator

TEST DATA FOR 6: Use players "Davies", "Muller", "Lewandowski" and "Kimmich". Then, call the function again with players from game.scored

*/
/* CHALLENGE #1*/
// 1
// console.log('==== ANSWER 01 ====');
// const [players1, players2] = game.players;
// console.log(players1, players2);

// 2
// console.log('==== ANSWER 02 ====');
// const [gk, ...fieldPlayers] = players1;
// console.log(gk, fieldPlayers);

// 3
// console.log('==== ANSWER 03 ====');
// const allPlayers = [...players1, ...players2];
// console.log(allPlayers);

// 4
// console.log('==== ANSWER 04 ====');
// const playersFinal = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
// console.log(playersFinal);

// 5
// console.log('==== ANSWER 05 ====');
// const {
//   odds: { team1, x: draw, team2 },
// } = game;
// console.log(team1, draw, team2);

// 6
// console.log('==== ANSWER 06 ====');
// const printGoals = function (...players) {
//   console.log(players);
//   console.log(`${players.length} goals were scored`);
// };
// printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
// printGoals(...game.scored);

// 7
// console.log('==== ANSWER 07 ====');
// team1 < team2 && console.log('Team 1 is more likely to win');
// team1 > team2 && console.log('Team 2 is more likely to win');

/* CHALLENGE #1*/

/* LOOPING ARRAYS */
// Joining two arrays
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(menu);
// console.log([...menu.entries()]);
// console.log(menu.entries());
// Looping menu arrays
// for (const item of menu) console.log(item);

// Looping with destructing array to get index and value of an array
// console.log('==== SOLUTION 1 ====');
// for (const item of menu.entries()) {
//   // console.log(item);
//   console.log(`${item[0] + 1} : ${item[1]}`);
// }

// console.log('==== SOLUTION 2 ====');
// for (const [i, el] of menu.entries()) {
//   // console.log(i, el);
//   console.log(`${i + 1} : ${el}`);
// }
/* LOOPING ARRAYS */

/* OBJECT LITARALS */
/* We can write a function inside an object like this by removing (: funtion)
orderPasta(ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1} ${ing2} and ${ing3}`);
}
*/
/* OBJECT LITARALS */

/* OPTIONAL CHAINING (?.) */
// it will return an error
// console.log(restaurant.openingHours.mon.open);

// mon property does not exist inside the openingHours
// if (restaurant.openingHours.mon) console.log(restaurant.openingHours.mon.open);
// fry property does exist inside the openingHours, it will return 11
// if (restaurant.openingHours.fri) console.log(restaurant.openingHours.fri.open);

// if (restaurant.openingHours && restaurant.openingHours.mon)
//   console.log(restaurant.openingHours.mon.open);

// WITH OPTIONAL CHAINING
// console.log(restaurant.openingHours.mon?.open);
// it will check, first: if openingHours does exist or not, second: check mon if does exist or not if not it returns undefinded(without ?. will return an error)
// console.log(restaurant.openingHours?.mon?.open);

// Example
// const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
// for (const day of days) {
// console.log(day);
// const open = restaurant.openingHours[day]?.open ?? 'closed';
// console.log(open);
// console.log(`On ${day}, we open at ${open}`);
// }

// Example Methods
// console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
// console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist');

// Example Array
// const users = [{ name: 'Jonas' }, { email: 'hello@mail.com' }];
// console.log(users[0]?.name ?? 'User array empty');

// if (users.length > 0) {
//   console.log(users[0].name);
// } else console.log('User array empty');

/* OPTIONAL CHAINING (?.) */

/* LOOPING OBJECTS: OBJECT KEYS - VALUES - ENTRIES */

// Property NAMES
// const properties = Object.keys(openingHours);
// console.log(properties);

// console.log(`We are open on ${properties.length} days`);

// for (const day of properties) {
//   console.log(day);
// }

// let openStr = `We are open on ${properties.length} days: `;
// for (const day of properties) {
//   openStr += `${day}, `;
// }
// console.log(openStr);

// Property VALUES
// const values = Object.values(openingHours);
// console.log(values);

// Entire object
// const entries = Object.entries(openingHours);
// console.log(entries);

// [key, value]
// for (const [key, { open, close }] of entries) {
//   console.log(`On ${key} we open at ${open} and close at ${close}`);
// }
/* LOOPING OBJECTS: OBJECT KEYS - VALUES - ENTRIES */

/* CHALLENGE #2*/
// 1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")

// 2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)

/* 3. Print the 3 odds to the console, but in a nice formatted way, exactly like this:
          Odd of victory Bayern Munich: 1.33
          Odd of draw: 3.25
          Odd of victory Borrussia Dortmund: 6.5
Get the teams name directly from the game object, dont hardcode them(except for a "draw"). HINT: Note how the odds and the game objects have the same proprety names

BONUS: Create an object called 'scorers' wich contains the names of the players who scored as properties, and the number of goals as the value. In this game it will look like this:
          {
            Gnarby: 1,
            Hummels: 1,
            Lewandowski: 2
          }
*/

/* CHALLENGE #2*/
// console.log('==== CHALLENGE #2 ====');

// 1: .entries() transform arrays into key:values array
// const playerScored = game.scored;
// for (const [index, player] of playerScored.entries()) {
//   // console.log(index, player);
//   console.log(`Goal ${index + 1}: ${player}`);
// }

// OR
// for (const [i, player] of game.scored.entries()) {
//   console.log(`Goal ${i + 1}: ${player}`);
// }

// 2
/*
const odds = Object.values(game.odds);
console.log(odds);
let average = 0;
for (const odd of odds) {
  average += odd;
}
average /= odds.length;
console.log(average);

// 3: Object.entries() transfor object into an arrays with key:value
for (const [team, odd] of Object.entries(game.odds)) {
  // console.log(team, odd);

  const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
  // console.log(game[team]);
  console.log(`Odd of ${teamStr} ${odd}`);
}*/

/* SETS = can never have any duplicates and has to be unique */
// const orderSet = new Set([
//   'Pasta',
//   'Pizza',
//   'Pizza',
//   'Risotto',
//   'Pasta',
//   'Pizza',
// ]);
// console.log(orderSet);

// console.log(new Set('Jonas'));

// console.log(orderSet.size);
// console.log(orderSet.has('Pizza'));
// console.log(orderSet.has('Bread'));
// orderSet.add('Garlic Bread');
// orderSet.add('Garlic Bread');
// orderSet.delete('Risotto');
// // orderSet.clear();
// console.log(orderSet);

// for (const order of orderSet) {
//   console.log(order);
// }

// Example
// const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
// const staffUnique = new Set(staff);
// const staffUnique = [...new Set(staff)];
// console.log(staffUnique);

// console.log(
//   new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size
// );

// console.log(new Set('Jonas').size);
/* SETS */

/* MAPS = returns with a new updated map */
// const rest = new Map();
// rest.set('name', 'Classico Italiano');
// rest.set(1, 'Firenze, Italy');
// console.log(rest.set(2, 'Lisbon, Portugal'));

// rest
//   .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
//   .set('open', 11)
//   .set('close', 23)
//   .set(true, 'We are open')
//   .set(false, 'We are closed');

// console.log(rest);

// console.log(rest.get('name'));
// console.log(rest.get(true));
// console.log(rest.get(1));

// const time = 21;
// console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

// console.log(rest.has('categories'));
// rest.delete(2);

// const arr = [1, 2];
// rest.set(arr, 'Test');
// console.log(rest.size);

// console.log(rest.get(arr)); // Test
// rest.clear()

// rest.set(document.querySelector('h1'), 'Heading');

// console.log(rest);
/* MAPS */

/* MAPS: ITERATION */

const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'Javascript'],
  ['correct', 3],
  [true, 'Correct 🎉'],
  [false, 'Try again'],
]);
console.log(question);

// Convert object to map
// console.log(Object.entries(openingHours));
// const hoursMap = new Map(Object.entries(openingHours));
// console.log(hoursMap);

// Quiz app
console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}
// const answer = Number(prompt('Your answer'));
// console.log(answer);

// console.log(question.get(question.get('correct') === answer));

// Convert map to array
console.log([...question]);
console.log([...question.keys()]);
console.log([...question.values()]);
/* MAPS: ITERATION */

/* CODING CHALLENGE #3 
1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So removes this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
          [FIRST HALF] 17: '⚽ GOAL'
*/

const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '🙌🏼 Subtitution'],
  [47, '⚽ GOAL'],
  [61, '🙌🏼 Subtitution'],
  [64, '📒 Yellow card'],
  [69, '📕 Red card'],
  [70, '🙌🏼 Subtitution'],
  [72, '🙌🏼 Subtitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '📒 Yellow card'],
]);

// 1.
// Get values of map
console.log(gameEvents.values());

// Convert Map to Set
// const events = new Set(gameEvents.values());
// console.log(events);

// Convert Set to Array
const events = [...new Set(gameEvents.values())];
console.log(events);

// 2.
gameEvents.delete(64);

// 3.
// console.log(gameEvents.size);
console.log(
  `An event happened, on average, every ${90 / gameEvents.size} minutes`
);

// const time = gameEvents.keys();
const time = [...gameEvents.keys()].pop();
console.log(time);
console.log(
  `An event happened, on average, every ${time / gameEvents.size} minutes`
);

// 4.
for (const [min, event] of gameEvents) {
  const half = min <= 45 ? 'FIRST' : 'SECOND';
  console.log(`${half} [HALF] ${min}: ${event}`);
}
/* CODING CHALLENGE #3 */

/* WORKING WITH STRING PART 1 */
// const airline = 'TAP Air Portugal';
// const plane = 'A320';

// console.log(plane[0]);
// console.log(plane[1]);
// console.log(plane[2]);
// console.log('B737'[0]);

// console.log(airline.length);
// console.log('B737'.length);

// console.log(airline.indexOf('r'));
// console.log(airline.lastIndexOf('r'));
// console.log(airline.indexOf('Portugal')); // case sensitive
// console.log(airline.indexOf('portugal')); // case sensitive

// console.log(airline.slice(4)); // 4 is beginning index of slicing, it will return a new string
// console.log(airline.slice(4, 7)); // 7 is ending of index and it will not include

// console.log(airline.slice(0, airline.indexOf(' ')));
// console.log(airline.slice(airline.indexOf(' ') + 1));

// console.log(airline.slice(-2));
// console.log(airline.slice(0, -1));

// const checkMiddleSeat = function (seat) {
//   const s = seat.slice(-1);
//   if (s === 'B' || s === 'E') {
//     console.log('You got the middle seat 😁');
//   } else {
//     console.log('You got lucky 😎');
//   }
// };

// checkMiddleSeat('11B');
// checkMiddleSeat('23C');
// checkMiddleSeat('3E');

// console.log(new String('jonas'));
// console.log(typeof new String('jonas'));

// console.log(new String('jonas').slice(1));
// console.log(typeof new String('jonas').slice(1));
/* WORKING WITH STRING PART 1 */

/* WORKING WITH STRING PART 2 */
const airline = 'TAP Air Portugal';

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

// Fix capitalization in name
// const passenger = 'jOnAS'; // Jonas
// const passengerLower = passenger.toLowerCase();
// const passengerCorrect =
//   passengerLower[0].toUpperCase() + passengerLower.slice(1);
// console.log(passengerCorrect); // Jonas

// Comparing emails
// const email = 'hello@jonas.io';
// const loginEmail = ' Hello@Jonas.Io \n';

// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();
// const normallizedEmail = loginEmail.toLowerCase().trim();
// console.log(normallizedEmail);
// console.log(email === normallizedEmail);

// Replacing
// const priceGB = '288,97£';
// const priceUS = priceGB.replace('£', '$').replace(',', '.');
// console.log(priceUS);

// const announcement =
//   'All passengers come to boarding door 23. Boarding door 23!';

// console.log(announcement.replace('door', 'gate'));
// console.log(announcement.replaceAll('door', 'gate'));

// Replacing with REGEX
// console.log(announcement.replace(/door/g, 'gate'));

// Boolean
const plane = 'Airbus A320neo';
console.log(plane.includes('A320')); // return true
console.log(plane.includes('Boeing')); // return false
console.log(plane.startsWith('A32')); // return false
console.log(plane.startsWith('Air')); // return false

if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
  console.log('Part of the NEW Airbus family');
}
// Practice axercise
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes('knife') || items.includes('gun')) {
    console.log('You are NOT allowed on board');
  } else {
    console.log('Welcome aboard!');
  }
};
checkBaggage('I have a laptop, some food and a pocket knife');
checkBaggage('Socks and camera');
checkBaggage('Got some snacks and a gun for protection');
/* WORKING WITH STRING PART 2 */

/* WORKING WITH STRING PART 3 */
console.log('a+very+nice+string'.split('+'));
console.log('Jonas Beckermann'.split(' '));

const [firstName, lastName] = 'Jonas Beckermann'.split(' ');
console.log(firstName, lastName);

const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

const capitalizeName = function (name) {
  const names = name.split(' ');
  const nameUpper = [];

  for (const n of names) {
    // OPTION 1
    // nameUpper.push(n[0].toUpperCase() + n.slice(1));

    // OPTION 2
    nameUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }

  console.log(nameUpper.join(' '));
};

capitalizeName('jessica ann smith davis'); // Jessica Ann Smith Davis
capitalizeName('jonas beckermann'); // Jonas Beckermann

// Padding
const message = 'Go to gate 23!';
// console.log(message.padStart(25, '+'));
console.log('Jonas'.padStart(20, '+'));
// console.log(message.padStart(20, '+').padEnd(30, '+'));
// console.log('Jonas'.padStart(20, '+').padEnd(30, '+'));

const maskCreditCard = function (number) {
  const str = number + ''; // convert number to string
  const last = str.slice(-4); // take four numbers from the last
  return last.padStart(str.length, '*');
};

console.log(maskCreditCard(54646987));
console.log(maskCreditCard(546469875878));
console.log(maskCreditCard('546469875878'));

// Repeat
const message2 = 'Bad weather... All Departures Delayed...';
console.log(message2.repeat(5));

const planeInLine = function (n) {
  console.log(`There are ${n} planes in line ${'✈'.repeat(n)}`);
};
planeInLine(4);
planeInLine(2);
planeInLine(10);
/* WORKING WITH STRING PART 3 */

/* CODING CHALLENGE #4 */
/*
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
  first_name
Some_Variable
  calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separete console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

HINT 1: Remember which character defines a new line in the textarea
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue

Afterwards, test with your own test data!
GOOD LUCK 😉
*/

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));
const text = document.querySelector('textarea').value;

document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  const rows = text.split('\n');
  // console.log(rows);

  for (const [i, row] of rows.entries()) {
    const [first, second] = row.toLowerCase().trim().split('_');
    // console.log(row, first, second);

    const output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;
    console.log(`${output.padEnd(20)}${'✅'.repeat(i + 1)}`);
  }
});
/* CODING CHALLENGE #4 */

/* STRING METHOD PRACTICE */
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';
// 🔴 Delayed Departure from FAO to TXL (11h25)
//               Arrival from BRU to FAO (11h45)
//    🔴 Delayed Arrival from HEL to FAO (12h05)
//              Departure from FAO to LIS (12h30)

// console.log(flights.split('+'));

const getCode = str => str.slice(0, 3).toUpperCase();

for (const flight of flights.split('+')) {
  const [type, from, to, time] = flight.split(';');
  // console.log(type);
  const output = `${type.startsWith('_Delayed') ? '🔴' : ''}${type.replaceAll(
    '_',
    ' '
  )} from ${getCode(from)} to ${getCode(to)} (${time.replace(':', 'h')})`;
  console.log(output.padStart(50));
}
/* STRING METHOD PRACTICE */
