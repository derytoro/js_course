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
