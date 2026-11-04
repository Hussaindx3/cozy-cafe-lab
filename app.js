console.log('Cozy Cafe JavaScript is connected!');

// Part 1: Update the cafe’s content
const mainTitleEl = document.querySelector('#main-title');
mainTitleEl.textContent = 'Welcome to the Cozy Cafe';

// Part 2: Style individual and grouped elements

const highlightTitleEls = document.querySelectorAll('.highlight-title');
highlightTitleEls.forEach((titleEl) => {
  console.log(titleEl.textContent);
  titleEl.style.fontStyle = 'italic';
});

const quoteOfTheDayEl = document.querySelector('#quote-of-the-day');
quoteOfTheDayEl.textContent = 'A little coffee, a little conversation.';
quoteOfTheDayEl.classList.add('featured');

// Part 3: Replace the main photo
const mainPhotoEl = document.querySelector('#main-photo');

console.log(mainPhotoEl.getAttribute('src'));

mainPhotoEl.setAttribute('src', './assets/berry-cake.jpg');
mainPhotoEl.setAttribute('alt', 'A berry cake served at the cafe');

// Part 4: Connect the background-colour button
const bgColorBtnEl = document.querySelector('#bg-color-btn');
const bodyEl = document.querySelector('body');

function handleBackgroundChange() {
  bodyEl.style.backgroundColor = 'bisque'; 
}

bgColorBtnEl.addEventListener('click', handleBackgroundChange);