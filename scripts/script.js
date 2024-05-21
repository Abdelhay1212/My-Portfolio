// toggle the burger menu
const burgerMenu = document.getElementById('burger-menu');
const navMenuLinks = document.getElementById('nav-menu-links');

burgerMenu.addEventListener('click', () => {
  burgerMenu.classList.toggle('active');
  navMenuLinks.classList.toggle('active');
});

// toggle the theme button
const themeToggle = document.getElementById('theme-toggle');
const moon = document.getElementById('moon');
const sun = document.getElementById('sun');
const body = document.body;

themeToggle.addEventListener('click', () => {
  moon.classList.toggle('hide');
  sun.classList.toggle('hide');

  body.classList.toggle('dark-mode');
});


// redirect the user to my github account and my resume
const githubBtn = document.getElementById('githubBtn');
const resumeBtn = document.getElementById('resumeBtn');
// github link
githubBtn.addEventListener('click', () => {
  window.open('https://github.com/Abdelhay1212', '_blank');
});
// resume link
resumeBtn.addEventListener('click', () => {
  window.open('https://drive.google.com/file/d/1qyfr-jsf_BpTlDvT_gk-NqvrMAR9bWPS/view?usp=sharing', '_blank');
});


// animate the span inside the h1 tag
const span = document.getElementById('animate-text');
const new_text = 'a Backend Engineer';
const old_text = span.innerText;

setInterval(() => {
  if (span.innerText == old_text) {
    span.classList.remove('animate__fadeIn');
    span.classList.add('animate__fadeOut');
    setTimeout(() => {
      span.innerText = new_text;
      span.classList.remove('animate__fadeOut');
      span.classList.add('animate__fadeIn');
    }, 500);
  } else {
    span.classList.remove('animate__fadeIn');
    span.classList.add('animate__fadeOut');
    setTimeout(() => {
      span.innerText = old_text;
      span.classList.remove('animate__fadeOut');
      span.classList.add('animate__fadeIn');
    }, 500);
  }
}, 2000);
