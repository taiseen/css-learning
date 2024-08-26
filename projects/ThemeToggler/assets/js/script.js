// 3 Jan 2022

const themeToggle = document.querySelector('.theme-toggler');
const colors = document.querySelectorAll('.color');
const root = document.querySelector(':root');

const themeContainer = document.querySelector('.theme-container');
const sideBarClose = document.querySelector('#theme-close');
const sideBarOpen = document.querySelector('#theme-open');


themeToggle.addEventListener('click', () => {

    themeToggle.classList.toggle('userClick');

    themeToggle.classList.contains('userClick')
        ? document.body.classList.add('active-theme')
        : document.body.classList.remove('active-theme');

});


colors.forEach(color => {
    color.addEventListener('click', () => {
        let bg = color.style.backgroundColor;
        root.style.setProperty('--mainColor', bg);
    });
});


sideBarOpen.addEventListener('click', () => {
    themeContainer.classList.add('sidebar-open');
    document.body.style.paddingRight = '350px';
});


sideBarClose.addEventListener('click', () => {
    themeContainer.classList.remove('sidebar-open');
    document.body.style.paddingRight = '0';
});