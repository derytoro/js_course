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

// Creates class by using Constructor fuctions and the new operator
const Person = function (firstName, birthYear) {
  //console.log(this);
  this.firstName = firstName;
  this.birthYear = birthYear;

  //   Never use this, use Person.prototype instead
  //   this.calcAge = function () {
  //     console.log(2037 - this.birthYear);
  //   };
};

// Creates new function calcAge(). it will be a part of Person prototype and it can invoke by instance
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

const jonas = new Person('Jonas', 1991);
const matilda = new Person('Matilda', 2017);
// console.log(jonas,matilda);
// instance of Person is available to call calcAge() which part of prototype
// jonas.calcAge();
// matilda.calcAge();
// jack.calcAge();

// Inheritance Student:child from Person:parent class by using constructor functions
const Student = function (firstName, birthYear, course) {
  // this.firstName = firstName;
  // this.birthYear = birthYear;
  Person.call(this, firstName, birthYear);
  this.course = course;
};

// Inheritance between Classes: Constructor functions
// Linking prototypes (Inheritance Student to Person class): So Student's instance 'mike' can invoke callAge() from Person class
Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} an I study ${this.course}`);
};

const mike = new Student('Mike', 2020, 'Computer Science');
console.log(mike);
mike.introduce();
mike.calcAge();
console.log(mike.__proto__);
console.log(mike.__proto__.__proto__);

console.log(mike instanceof Student); // true
console.log(mike instanceof Person); // true, it's because we used Linking prototypes between Student and Person
console.log(mike instanceof Object); // true

Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor); // returns Student class, but if we don't declare "Student.prototype.constructor = Student" the return is Person class

// 1. New {} is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically return {}

// console.log(jonas instanceof Person); // true

// Implementing static methods that only available for constructor Person not instance.
Person.hey = function () {
  console.log('Hey there 👋');
  console.log(this);
};
Person.hey(); // Hey there 👋 this is a static method
// it can't invoke hey(), because it's a static method
// jonas.hey(); // jonas.hey is not a function

// Prototypes
console.log(Person.prototype);

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
/*
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
*/

// Coding Challenge #1

// ES6 Classes
// class expression
// const PersonCl = class {};

// class declaration
/*
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

  static hey() {
    console.log('Hey there 👋');
    console.log(this);
  }
}
*/
// const jessica = new PersonCl('Jessica Davis', 1996);
// console.log(jessica);
// jessica.calcAge();
// console.log(jessica.age);

// console.log(jessica.__proto__ === PersonCl.prototype);

// Creates new function greet() into PersonCl class
// PersonCl.prototype.greet = function () {
//   console.log(`Hey ${this.fullName}`);
// };
// jessica.greet();

// 1. Classes are NOT hoisted
// 2. Class are first-class citizen
// 3. Classes are executed in strict mode

// const walter = new PersonCl('Walter', 1965); // walter probably has not a fullName property, then alert appears
// PersonCl.hey();

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

// STATIC METHODS: function that only available for constructor
// Array.from(document.querySelectorAll('h1'));
// Number.parseFloat(12);

// Object.create: creating prototype manually called "PersonProto"
const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  // you can change init() with any name
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);
console.log(steven); // will create empty object {} that linked to PersonProto
// create steven properties by linked to PersonProto by using object literal
steven.name = 'Steven';
steven.birthYear = 2002;
steven.calcAge(); //35

console.log(steven.__proto__ === PersonProto); // true

const sarah = Object.create(PersonProto);
sarah.init('Sarah', 1979);
sarah.calcAge();

///////////////////////////////////////
// Coding Challenge #2

/* 
1. Re-create challenge 1, but this time using an ES6 class;
2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6);
3. Add a setter called 'speedUS' which sets the current speed in mi/h (but converts it to km/h before storing the value, by multiplying the input by 1.6);
4. Create a new car and experiment with the accelerate and brake methods, and with the getter and setter.

DATA CAR 1: 'Ford' going at 120 km/h

GOOD LUCK 😀
*/

class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

const ford = new CarCl('Ford', 120);
console.log(ford); // instance
console.log(ford.speedUS); // getters
ford.accelerate();
ford.accelerate();
ford.brake();

ford.speedUS = 50; // setters
console.log(ford); // 50 * 1.6 = 80
