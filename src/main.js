const header = document.querySelector('.header');
const headerHeight = header.getBoundingClientRect().height;

document.addEventListener('scroll', () => {
  window.scrollY > headerHeight
    ? header.classList.add('header--dark')
    : header.classList.remove('header--dark');
});
