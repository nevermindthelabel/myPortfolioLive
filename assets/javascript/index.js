const toggle = document.querySelector('.theme-switch');
const main = document.querySelector('main');

function switchTheme() {
  main.classList.toggle('dark');
}

toggle.addEventListener('change', switchTheme, false);
