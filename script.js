const menuButton = document.querySelector('.menu-button');
const navBar = document.querySelector('nav');
menuButton.addEventListener('click', () => {
  navBar.classList.toggle('active');
});

// display header on scroll up
let lastScrollTop = 100;
window.addEventListener('scroll', () => {
  let currentScroll = window.scrollY || document.documentElement.scrollTop;
  if (currentScroll > lastScrollTop) {
    document.querySelector('header').classList.add('hidden');
  } else {
    document.querySelector('header').classList.remove('hidden');
  }
  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});
