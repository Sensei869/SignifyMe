// script.js
const toggleButton = document.querySelector('.toggle_btn');
const navLinks = document.querySelector('.navlinks');
const navButton = document.querySelector('.navbutton');

toggleButton.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  navButton.classList.toggle('active');
});
