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

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

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
const message = document.createElement('div');
message.classList.add('cookie-message');
// message.textContent = 'We use cookied for improved functionality and analytics.';
message.innerHTML =
  'We use cookied for improved functionality and analytics. <button class="btn btn--close--cookie">Got It!</button>';

// header.prepend(message);
// Then we will inserting message into DOM "in header" of our website
// prepending basically adds the element as the first child of this element

header.append(message);
// appending basically adds the element as the last child of this element
// so message is now indeed a life element living in the DOM, and so therefor it cannot be at multiple places at the same time. it's just like a person that also cannot be at two places simultaneously.

// Copying the message twice into the header
// header.append(message.cloneNode(true));

// header.before(message); // adds message as a sibling before the header, not included within the header
// header.after(message); // adds message as a sibling after the header, not included within the header

// Deleted elements
// document
//   .querySelector('.btn--close--cookie')
//   .addEventListener('click', function () {
//     message.remove();
//   });

// Deleted message by removing child elemnt of the parent elemnt
document
  .querySelector('.btn--close--cookie')
  .addEventListener('click', function () {
    message.parentElement.removeChild(message);
  });
