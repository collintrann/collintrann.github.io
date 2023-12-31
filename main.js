const themeToggle = document.querySelector('#theme-toggle');
const root = document.documentElement;

const lightModeImagePath = 'images/sun.png';
const darkModeImagePath = 'images/moon.png';
const themeIcon = document.querySelector('.theme-icon'); //theme img element


const setDark = () => {
  root.setAttribute('data-theme', 'dark-mode');
  themeIcon.src = darkModeImagePath;
  themeIcon.alt = 'Dark Mode';
};

const setLight = () => {
  root.removeAttribute('data-theme');
  themeIcon.src = lightModeImagePath;
  themeIcon.alt = 'Light Mode';
};

const toggleTheme = () => { // changes theme on click
  if (root.getAttribute('data-theme') === "dark-mode") {
    setLight();
    localStorage.setItem('savedTheme', 'light');
  } else {
    setDark();
    localStorage.setItem('savedTheme', 'dark');
  }
};

const setSavedTheme = (savedTheme) => { // sets previously saved theme
  if (savedTheme === "dark") {
    setDark();
  } else {
    setLight();
  }
};

themeToggle.addEventListener('click', toggleTheme);
setSavedTheme(localStorage.getItem('savedTheme'));


const hamburger = document.querySelector('.hamburger-menu');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});