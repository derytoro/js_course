'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelectorAll('.show-modal');

console.log(modal);
console.log(overlay);
console.log(btnCloseModal);
console.log(btnOpenModal);

for (let i = 0; i < btnOpenModal.length; i++) {
  console.log(btnOpenModal[i].textContent);
  btnOpenModal[i].addEventListener('click', function () {
    console.log('Button clicked!');
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  });

  const closeModal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
  };
  btnCloseModal.addEventListener('click', closeModal);
  overlay.addEventListener('click', closeModal);

  //   btnCloseModal.addEventListener('click', function () {
  //     modal.classList.add('hidden');
  //     overlay.classList.add('hidden');
  //   });

  //   overlay.addEventListener('click', function () {
  //     modal.classList.add('hidden');
  //     overlay.classList.add('hidden');
  //   });
}
