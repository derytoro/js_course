'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

///////////////////////
// Page navigation: Smooth scrool
// document.querySelectorAll('.nav__link').forEach(function (el) {
//   el.addEventListener('click', function (e) {
//     e.preventDefault();
//     // console.log('LINK');
//     const id = this.getAttribute('href');
//     console.log(id);
//     document.querySelector(id).scrollIntoView({
//       behavior: 'smooth',
//     });
//   });
// });

/* Event delegation 
1. Add event listener to common parent element
2. Determine what element originated the event
*/
document.querySelector('.nav__links').addEventListener('click', function (e) {
  console.log(e.target);

  // Matching strategy
  if (e.target.classList.contains('nav__link')) {
    // console.log('LINK')
    e.preventDefault();
    const id = e.target.getAttribute('href');
    // console.log(id);
    document.querySelector(id).scrollIntoView({
      behavior: 'smooth',
    });
  }
});

//////////////////////

/////////////////////
// Tabbed Components
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

// Bad practice
// tabs.forEach(t => t.addEventListener('click', () => console.log('TAB')));
// Best practice: using Event Delegation
tabsContainer.addEventListener('click', function (e) {
  // const clicked = e.target.parentElement;
  const clicked = e.target.closest('.operations__tab');
  console.log(clicked);

  // Guard clause
  if (!clicked) return;

  // Remove active classes
  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  tabsContent.forEach(c => c.classList.remove('operations__content--active'));

  // Activate tab
  clicked.classList.add('operations__tab--active');

  // Activate content area
  console.log(clicked.dataset.tab);
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});

/////////////////////
/*
Advanced DOM and events
*/

// Selecting, Creating, and Deleting elements
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

// Selecting by using querySelector() and querySelectorAll()
const header = document.querySelector('.header');
const allSections = document.querySelectorAll('.section');
console.log(allSections); // will returns NodeList which mean it is opposite from HTMLCollections, the DOM will not updated automaticaly when DOM is changed/deleted

// Selecting by using getElementById() and getElementsByTagName() and getElementsByClassName()
document.getElementById('section--1');
const allButtons = document.getElementsByTagName('button');
console.log(allButtons); // will returns HTMLCollections or we called life collection, that means if the DOM changes and this collection is also immediately updated automaticaly. if you deleted the button's DOM the HTMLCollections will updated(if you have 9 buttons then you delete 1 then DOM will update to 8 buttons, check in to console)

console.log(document.getElementsByClassName('btn')); // will returns HTMLCollections

// Creating and Inserting Elements
// .insertAdjacentHTML
const message = document.createElement('div'); // return DOM element div
message.classList.add('cookie-message'); // adding class name on div "message"
// message.textContent = 'We use cookied for improved functionality and analytics.';
message.innerHTML =
  'We use cookied for improved functionality and analytics. <button class="btn btn--close--cookie">Got It!</button>';

// header.prepend(message);
// Then we will inserting message into DOM "in header" of our website
// prepending basically adds the element as the first child of this element

header.append(message);
// appending basically adds the element as the last child of this element
// so message is now indeed a life element living in the DOM, and so therefor it cannot be at multiple places at the same time. it's just like a person that also cannot be at two places simultaneously.

// Copying the message twice into the header, it will create 2 message at first and last child
// header.append(message.cloneNode(true));

// header.before(message); // adds message as a sibling before the header, not included within the header
// header.after(message); // adds message as a sibling after the header, not included within the header

// Delete elements
// document
//   .querySelector('.btn--close--cookie')
//   .addEventListener('click', function () {
//     message.remove();
//   });

// Delete message by removing child elemnt of the parent elemnt
// document
//   .querySelector('.btn--close--cookie')
//   .addEventListener('click', function () {
//     message.parentElement.removeChild(message);
//   });

// Styles, Attributes and Classes
document
  .querySelector('.btn--close--cookie')
  .addEventListener('click', function () {
    message.parentElement.removeChild(message);
  });

// Styles
message.style.backgroundColor = '#37383d';
message.style.width = '120%';

// Defining inline style into DOM
console.log(message.style.height); // returns empty
console.log(message.style.backgroundColor); // rgb(55,56,61) only work on inline style

console.log(getComputedStyle(message)); // will get value from css file or our real style of web page
console.log(getComputedStyle(message).color); // returns string
console.log(getComputedStyle(message).height);

message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';

// Change color of :root in style.css
// :root css is equal to document.documentElement in javascript
document.documentElement.style.setProperty('--color-primary', 'orangered');

// Attributes
const logo = document.querySelector('.nav__logo');
console.log(logo.alt);
console.log(logo.src);
console.log(logo.className);

logo.alt = 'Beautiful minimalist logo';

// Non-standard
console.log(logo.designer); // undefined
console.log(logo.getAttribute('designer')); // Jonas
logo.setAttribute('company', 'Bankist');

console.log(logo.src); // absolute url
console.log(logo.getAttribute('src')); // relative url

// const link = document.querySelector('.twitter-link');
const link = document.querySelector('.nav__link--btn');
console.log(link.href); // returns absolute url
console.log(link.getAttribute('href')); // returns # relative url

// Data attributes
console.log(logo.dataset.versionNumber); // 3.0

// Classes
logo.classList.add('c', 'j'); // add multiple classes
logo.classList.remove('c', 'j');
logo.classList.toggle('c');
logo.classList.contains('c'); // not includes in array

// Don't use because it will override the existing classes ans only put one class in any element
logo.className = 'Jonas';

//////////////////////////////////////
// Implementing smooth scrolling
// const btnScrollTo = document.querySelector('.btn--scroll');
// const section1 = document.querySelector('#section--1');

// btnScrollTo.addEventListener('click', function (e) {
//   const s1coords = section1.getBoundingClientRect();
//   console.log(s1coords);

//   console.log(e.target.getBoundingClientRect());

//   console.log('Current scroll (X/Y)', window.pageXOffset, pageYOffset);

//   console.log(
//     'height/width viewport',
//     document.documentElement.clientHeight,
//     document.documentElement.clientWidth
//   );

// Scrolling
// window.scrollTo(
//   s1coords.left + window.pageXOffset,
//   s1coords.top + window.pageYOffset,
// );

// window.scrollTo({
//   left: s1coords.left + window.pageXOffset,
//   top: s1coords.top + window.pageYOffset,
//   behavior: 'smooth',
// });

// Modern way
//   section1.scrollIntoView({ behavior: 'smooth' });
// });

// Types of Events and Event Handlers
// const h1 = document.querySelector('h1');

// const alertH1 = function (e) {
//   alert('addEventListener: Great! You are reading the heading');

//   // h1.removeEventListener('mouseenter', alertH1); // it removes alert from alertH1(), so alert will appear at once
// };

// h1.addEventListener('mouseenter', alertH1);

// setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 3000);

// h1.addEventListener('mouseenter', function (e) {
//   alert('addEventListener: Great! You are reading the heading');
// });

// h1.onmouseenter = function (e) {
//   alert('addEventListener: Great! You are reading the heading');
// };

///////////////////////////////////////
// Event Propagation in Practice
// const randomInt = (min, max) =>
//   Math.floor(Math.random() * (max - min + 1) + min);

// const randomColor = () =>
//   `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)},${randomInt(0, 255)})`;

// console.log(randomColor(0, 255));

// document.querySelector('.nav__link').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log('LINK', e.target, e.currentTarget);
//   console.log(e.currentTarget === this);

// Stop propagtion
// e.stopPropagation();
// });

// document.querySelector('.nav__links').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log('CONTAINER', e.target, e.currentTarget);
// });

// document.querySelector('.nav').addEventListener(
//   'click',
//   function (e) {
//     this.style.backgroundColor = randomColor();
//     console.log('NAV', e.target, e.currentTarget);
//   },
//   true // capturing, appears at the first log
// );

// DOM Traversing
const h1 = document.querySelector('h1');

// Going downwards: child
console.log(h1.querySelectorAll('highlight'));
console.log(h1.childNodes); // shows every single NodeList that contain within h1
console.log(h1.children); // shows every single HTMLCollection that contain within h1
h1.firstElementChild.style.color = 'white';
h1.lastElementChild.style.color = 'orangered';

// Going upwards: parents
console.log(h1.parentNode);
console.log(h1.parentElement);

h1.closest('.header').style.background = 'var(--gradient-secondary)'; // it means header which closest to h1
h1.closest('h1').style.background = 'var(--gradient-primary)'; // it means h1 itself

// Going sideways: siblings
console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);

console.log(h1.previousSibling);
console.log(h1.nextSibling);

console.log(h1.parentElement.children);
[...h1.parentElement.children].forEach(function (el) {
  if (el !== h1) {
    el.style.transform = 'scale(0.5)';
  }
});
