let popupBtn = document.querySelector('.popup-btn');
let popupCloseBtn = document.querySelector('.close-btn');
let popup = document.querySelector('.popup');
let pageService = document.querySelector('.page');

popupBtn.addEventListener('click', () => {
    popup.classList.add('popup-visible');
    pageService.classList.add('disable-scroll');
});

popupCloseBtn.addEventListener('click', () => {
    popup.classList.remove('popup-visible');
    pageService.classList.remove('disable-scroll');
});
