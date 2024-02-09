const header = document.querySelector('.header');
const headerHeight = header.getBoundingClientRect().height;

document.addEventListener('scroll', () => {
  window.scrollY > headerHeight
    ? header.classList.add('header--dark')
    : header.classList.remove('header--dark');
});

const home = document.querySelector('.home__container');
const homeHeight = home.offsetHeight;

document.addEventListener('scroll', () => {
  home.style.opacity = 1 - window.scrollY / homeHeight;
});

const arrowUp = document.querySelector('.arrow-up');

document.addEventListener('scroll', () => {
  window.scrollY > homeHeight * 0.5
    ? (arrowUp.style.opacity = 1)
    : (arrowUp.style.opacity = 0);
});

const navBarMenu = document.querySelector('.header__menu');
const toggleButton = document.querySelector('.header__toggle');

toggleButton.addEventListener('click', () => {
  navBarMenu.classList.toggle('open');
});

// upon clicking an item in menu / menu closes

navBarMenu.addEventListener('click', () => {
  navBarMenu.classList.remove('open');
});
