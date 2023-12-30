const themeToggle = document.querySelector('#theme-toggle');
const root = document.documentElement;

const lightModeImagePath = 'images/sun.png';
const darkModeImagePath = 'images/moon.png';


const setDark = () => {
  root.setAttribute('data-theme', 'dark-mode');
  const themeIcon = document.querySelector('.theme-icon');
  themeIcon.src = darkModeImagePath;
  themeIcon.alt = 'Dark Mode';
};

const setLight = () => {
  root.removeAttribute('data-theme');
  const themeIcon = document.querySelector('.theme-icon');
  themeIcon.src = lightModeImagePath;
  themeIcon.alt = 'Light Mode';
};

const toggleTheme = () => {
  if (root.getAttribute('data-theme') === "dark-mode") {
    setLight();
    localStorage.setItem('savedTheme', 'light');
  } else {
    setDark();
    localStorage.setItem('savedTheme', 'dark');
  }
};

const setSavedTheme = (savedTheme) => {
  if (savedTheme === "dark") {
    setDark();
  } else {
    setLight();
  }
};

themeToggle.addEventListener('click', toggleTheme);
setSavedTheme(localStorage.getItem('savedTheme')); //sets previously saved theme