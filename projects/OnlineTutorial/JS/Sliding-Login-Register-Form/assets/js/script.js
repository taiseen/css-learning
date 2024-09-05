// 22 Dec 2021

const signinBtn = document.querySelector('.signinBtn');
const signupBtn = document.querySelector('.signupBtn');
const formBox = document.querySelector('.formBox');
const body = document.querySelector('body');


signupBtn.addEventListener('click', () => {
    formBox.classList.add('active');
    body.classList.add('active');
});

signinBtn.addEventListener('click', () => {
    formBox.classList.remove('active');
    body.classList.remove('active');
});

