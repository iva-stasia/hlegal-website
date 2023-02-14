let tabButtons = document.querySelectorAll('.tabs__label');
let tabContents = document.querySelectorAll('.tabs__tab-container');

tabButtons.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        tabButtons.forEach((btn) => btn.classList.remove('active-gradient'));
        btn.classList.add('active-gradient');
        tabContents.forEach((block) => block.classList.remove('visible'));
        tabContents[index].classList.add('visible');
    });
});
