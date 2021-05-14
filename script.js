'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');
// console.log(btnsOpenModal);

const openModal = function () {
  console.log('Button clicked');
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', openModal);
}

btnCloseModal.addEventListener('click', closeModal); // Here we use callback[without "()"] instead of call function(), because call function will run before click event executes
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  //console.log(e.key); logs pressed key
  //   if (e.key === 'Escape') {
  //     if (!modal.classList.contains('hidden')) {
  //       closeModal();
  //     }
  //   }
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
