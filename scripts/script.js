// toggle the burger menu
const burgerMenu = document.getElementById('burger-menu');
const navMenuLinks = document.getElementById('nav-menu-links');

burgerMenu.addEventListener('click', () => {
  burgerMenu.classList.toggle('active');
  navMenuLinks.classList.toggle('active');
});


// toggle the theme button
const themeToggle = document.getElementById('theme-toggle');
const nav = document.getElementById('nav');
const moon = document.getElementById('moon');
const sun = document.getElementById('sun');
const body = document.body;

themeToggle.addEventListener('click', () => {
  moon.classList.toggle('hide');
  sun.classList.toggle('hide');

  body.classList.toggle('dark-mode');
  nav.classList.toggle('dark-mode');
});
