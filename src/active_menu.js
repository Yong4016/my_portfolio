'use strict';

const sectionIds = [
  '#home',
  '#about',
  '#skills',
  '#work',
  '#testimonial',
  '#contact',
];

const sections = sectionIds.map((id) => document.querySelector(id));
const navItems = sectionIds.map((id) =>
  document.querySelector(`a[href="${id}"]`)
);

const options = {
  root: null,
  rootMargin: '20px 0px 0px 0px',
  threshold: 0.8,
};

const callback = (entries) => {
  entries.forEach((entry) => {
    const index = sectionIds.indexOf(`#${entry.target.id}`);
    const navItem = navItems[index];

    entry.isIntersecting
      ? navItem.classList.add('active')
      : navItem.classList.remove('active');
  });
};

const observer = new IntersectionObserver(callback, options);

sections.forEach((section) => {
  observer.observe(section);
});
