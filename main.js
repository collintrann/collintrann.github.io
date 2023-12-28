const themeToggle = document.querySelector('#theme-toggle');
const root = document.documentElement;

const lightModeImagePath = 'images/sun.png';
const darkModeImagePath = 'images/moon.png';

const toggleTheme = () => {
  var themeIcon = document.querySelector('.theme-icon');
  if (root.getAttribute('data-theme') === "dark-mode") {
    root.removeAttribute('data-theme');
    themeIcon.src = lightModeImagePath;
    themeIcon.alt = 'Light Mode';
  } else {
    root.setAttribute('data-theme', 'dark-mode');
    themeIcon.src = darkModeImagePath;
    themeIcon.alt = 'Dark Mode';
  }
};

themeToggle.addEventListener('click', toggleTheme);