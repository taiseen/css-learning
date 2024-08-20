const open = document.querySelector('.open');
const close = document.querySelector('.close');
const cookiesBox = document.querySelector('.cookies-box');


open.addEventListener('click', () => {
    cookiesBox.classList.add('active');
})

close.addEventListener('click', () => {
    cookiesBox.classList.remove('active');

})