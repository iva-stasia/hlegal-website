let menuBtn = document.querySelector('.header__mobile-menu-btn');
let nav = document.querySelector('.header__nav');
let overlay = document.querySelector('.header__overlay');
let page = document.querySelector('.page');

menuBtn.addEventListener('click', () => {
    nav.classList.add('mobile-visible');
    overlay.classList.add('mobile-visible');
    page.classList.add('disable-scroll');
});

let closeBtn = document.querySelector('.header__menu-close-btn');

closeBtn.addEventListener('click', () => {
    nav.classList.remove('mobile-visible');
    overlay.classList.remove('mobile-visible');
    page.classList.remove('disable-scroll');
});

let navList = document.querySelector('.header__nav-list');

navList.addEventListener('click', ({ target }) => {
    if (target.closest('.header__nav-item')) {
        nav.classList.remove('mobile-visible');
        overlay.classList.remove('mobile-visible');
    }
});
