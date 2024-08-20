// 22 Dec 2021

const menu = document.getElementById('menu');
const menuBtn = document.getElementById('menuBar');


menuBtn.addEventListener('click', () => {

    menu.classList.toggle('active');
})