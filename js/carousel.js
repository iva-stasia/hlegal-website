let carouseButtons = document.querySelectorAll('.carousel__button');
let carouseContents = document.querySelectorAll('.carousel__card');

carouseButtons.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        carouseButtons.forEach((btn) => btn.classList.remove('active'));
        btn.classList.add('active');
        carouseContents.forEach((block) => block.classList.remove('visible'));
        carouseContents[index].classList.add('visible');
    });
});
