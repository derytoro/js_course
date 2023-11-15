'use strict';

/*
=== 4 OOP CONCEPTS  ===
Abstraction: Ignoring or hiding details that don't matter, allowing us to get an overview perspective of the thing we're implementing, instead of messing with details that don't really matter to our implementation.
Encapsulation: Keeping properties and methods private inside the class, so they are not accessible from outside the class. Some methods can be expose as a public interface(API).
Inheritance: Child class extends Parent class. Making all properties and methods of a certain class available to a child class, forming a hierarchical relationship between classes. This allows us to reuse common logic and to model real-world relationships.
Polymorphism: A child class can overwrite a method it inherited from a parent class.




=== Classical OOP: Classes ===
Objects are instantiated from a class, which functions like a blueprint.
Behavior (methods) is copied from class to all instance.


=== OOP in JS: Prototype ===
Objects are linked to a prototype object.
Prototypal inheritance: The prototype contains methods (behavior) that are accessible to all objects linked to that prototype.
Behavior is delegated to the linked prototype object.


=== 3 WAYS OF IMPLEMENTING PROTOTYPAL INHERITANCE IN JS ===
1. Constructor function
   Technique to create objects from a function.
   This is how built-in objects like Arrays, Maps or Sets are actually implemented.


2. ES6 Classes
   Modern alternative to constructor fuction syntax.
   "Syntactic sugar": behind the scenes, ES6 classes work exactly like contructor fuctions
   ES6 classes do NOT behave like classes in 'classical OOP'


3. Object.create()
   The easiest and most straightforward way of linking an object to a prototype object.
*/

// Constructor fuctions and the new operator
const Person = function (firstName, birthYear) {
  //console.log(this);
  this.firstName = firstName;
  this.birthYear = birthYear;

  //   Never use this, use Person.prototype instead
  //   this.calcAge = function () {
  //     console.log(2037 - this.birthYear);
  //   };
};

const jonas = new Person('Jonas', 1991);
console.log(jonas);

// 1. New {} is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically return {}

const matilda = new Person('Matilda', 2017);
const jack = new Person('Jack', 2022);
console.log(matilda, jack);

console.log(jonas instanceof Person); // true

// Prototypes
console.log(Person.prototype);

// Creates new function calcAge().
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

jonas.calcAge();
matilda.calcAge();
jack.calcAge();

console.log(jonas.__proto__);
console.log(jonas.__proto__ === Person.prototype); // true

console.log(Person.prototype.isPrototypeOf(jonas)); // true
console.log(Person.prototype.isPrototypeOf(matilda)); // true
console.log(Person.prototype.isPrototypeOf(Person)); // false

// .prototypeOfLinkedObjects
// Creates new property 'species'.
Person.prototype.species = 'Homo Sapiens';
console.log(jonas, matilda);
// console.log(jonas.species, matilda.species);

console.log(jonas.hasOwnProperty('firstName')); // true
console.log(jonas.hasOwnProperty('species')); // false

console.log(jonas.__proto__);
// Object.prototype (top of prototype chain)
console.log(jonas.__proto__.__proto__);
console.log(jonas.__proto__.__proto__.__proto__); // null

console.dir(Person.prototype.constructor);

const arr = [3, 6, 6, 5, 6, 9, 9]; // new Array === []
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);

console.log(arr.__proto__.__proto__);

Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(arr.unique());

const h1 = document.querySelector('h1');
console.dir(x => x + 1);

// Coding Challenge #1

/* 
1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h

GOOD LUCK 😀
*/

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

const bwm = new Car('BMW', 120);
bwm.accelerate();
bwm.accelerate();
bwm.brake();
bwm.accelerate();

const mercedes = new Car('Mercedes', 95);
mercedes.accelerate();
mercedes.brake();

// ES6 Classes
// class expression
// const PersonCl = class {};

// class declaration
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // Method will be added to .prototype property
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  // Implementing getters
  get age() {
    return 2037 - this.birthYear;
  }

  // Implementing getters and setters for data validation on creating new object of PersonCl class
  // Set a property that already exists
  set fullName(name) {
    console.log(name);
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name`);
  }

  get fullName() {
    return this._fullName;
  }
}

const jessica = new PersonCl('Jessica Davis', 1996);
console.log(jessica);
jessica.calcAge();
console.log(jessica.age);

console.log(jessica.__proto__ === PersonCl.prototype);

// Creates new function greet() into PersonCl class
PersonCl.prototype.greet = function () {
  console.log(`Hey ${this.fullName}`);
};
jessica.greet();

// 1. Classes are NOT hoisted
// 2. Class are first-class citizen
// 3. Classes are executed in strict mode

const walter = new PersonCl('Walter', 1965); // walter probably has not a fullName property, then alert appears

// SETTERS and GETTERS
// it is useful for data validation
const account = {
  owner: 'Jonas',
  movements: [200, 530, 120, 300],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};

// how to use getters
console.log(account.latest);

// how to use setters
account.latest = 50;
console.log(account.movements);
