let navMain = document.querySelector('.main-nav')
let navToggle = document.querySelector('.main-nav__button');
let navList = document.querySelector('.main-nav__list')


navToggle.addEventListener('click', () => {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
    navList.classList.remove('main-nav__list--closed');
    navList.classList.add('main-nav__list--opened');
  }
  else {
    navMain.classList.remove('main-nav--opened');
    navMain.classList.add('main-nav--closed');
    navList.classList.remove('main-nav__list--opened');
    navList.classList.add('main-nav__list--closed');
  }
});
