// scroll to a specified section by id
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);

  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  } else {
    console.error(`Section with ID "${sectionId}" not found.`);
  }
}

// scroll to top functionality
const scrollToTop = document.querySelector('.scrollToTop');
// show the button when scrolled down
window.addEventListener('scroll', () => {
  if (window.scrollY > 200) {
    scrollToTop.classList.add('show');
  } else {
    scrollToTop.classList.remove('show');
  }
});
// scroll back to top when click on this button
scrollToTop.addEventListener('click', () => {
  scrollToSection('nav')
});

// toggle the burger menu
const burgerMenu = document.getElementById('burger-menu');
const navMenuLinks = document.getElementById('nav-menu-links');

burgerMenu.addEventListener('click', () => {
  burgerMenu.classList.toggle('active');
  navMenuLinks.classList.toggle('active');
});


// toggle the theme button
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  body.classList.toggle('light-mode');
});


// redirect the user to my github account and my resume
const githubBtn = document.getElementById('githubBtn');
const resumeBtn = document.getElementById('resumeBtn');
githubBtn.addEventListener('click', () => {
  window.open('https://github.com/Abdelhay1212', '_blank');
});
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


// fetch projects data from the json file
async function fetchData() {
  const response = await fetch('/data/data.json');
  const data = await response.json();

  const projectsCards = document.querySelector('.project-cards');

  function displayProjects(endIndex) {
    const projectsToDisplay = data.projects.slice(0, endIndex);

    projectsCards.innerHTML = '';
    projectsToDisplay.forEach(project => {
      const projectCard = document.createElement('div');
      projectCard.classList.add('project-card');

      projectCard.innerHTML = `
        <img src="${project.image}" alt="">
        <div class="text">
          <h3>${project.name}</h3>
          <p>${project.description}</p>
          <h4>Technologies Used:</h4>
          <p>${project.techs.join(', ')}</p>
          <div class="links">
            <a href="${project.repoURL}" target="_blank">
              ${project.githubSVG}
              Repo
            </a>
            <a href="${project.demoURL}" target="_blank">
              ${project.demoSVG}
              Demo
            </a>
          </div>
        </div>
      `;
      projectsCards.appendChild(projectCard);
    });

    const projectCards = document.querySelectorAll('.project-card');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'scale(1)';
        } else {
          entry.target.style.opacity = '0';
          entry.target.style.transform = 'scale(0)';
        }
      });
    });
    projectCards.forEach(card => {
      observer.observe(card);
    });
  }

  const seeMore = document.querySelector('.seeMore');
  const oldBtnText = seeMore.innerHTML;

  seeMore.addEventListener('click', () => {
    if (seeMore.classList.contains('all')) {
      displayProjects(3);
      scrollToSection('projects');
      seeMore.innerHTML = oldBtnText;
      seeMore.classList.remove('all');
    } else {
      seeMore.classList.add('all');
      seeMore.innerText = 'Show Less';
      displayProjects(data.projects.length);
    }
  });

  displayProjects(3);
}
fetchData();


// adding skills dynamically
async function addSkills() {
  const response = await fetch('/data/skills.json');
  const skills = await response.json();

  function displaySkills(key) {
    const techsElem = document.querySelector(`.${key} .techs`);
    skills[key].forEach(skill => {
      techsElem.innerHTML += `<img src=${skill.source} alt=${skill.alt}></img>`;
    });
  }

  for (const key in skills) {
    displaySkills(key);
  }
}
addSkills();
