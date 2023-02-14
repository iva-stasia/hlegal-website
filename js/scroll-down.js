let scrollBtn = document.querySelector('.banner__scroll-btn');
scrollBtn.addEventListener('click', () => {
    let tabsContainer = document.querySelector('.tabs');

    window.scrollTo({
        top: tabsContainer.offsetTop,
        behavior: 'smooth',
    });
});
