const toggle = document.querySelector('.theme-switch');
const main = document.querySelector('main');
const nav = document.querySelector('nav');
const footer = document.querySelector('footer');
const navClass = document.querySelectorAll('.nav-link');
const aTag = document.querySelector('a');

function switchTheme() {
  main.classList.toggle('dark');
  nav.classList.toggle('dark');
  footer.classList.toggle('dark');
}

function load() {
  document.getElementsByClassName('align-middle')[0].appendChild(document.createTextNode(new Date().getFullYear()));
}
window.onload = load;

toggle.addEventListener('change', switchTheme, false);

function activeClass(e) {
  console.log(e);
  console.log(e.target);
  navClass.forEach(nav => {
    nav.classList.contains('active') ? console.log(nav) : console.log('not this one');
    // console.log(nav);
  });
}
aTag.addEventListener('click', e => activeClass(e));
// activeClass();
