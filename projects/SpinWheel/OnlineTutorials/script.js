// 30 - December - 2023

const spinBtn = document.querySelector('.spinBtn');
const wheel = document.querySelector('.wheel');

const spinValue = Math.ceil(Math.random() * 3600);

let value = spinValue;

spinBtn.addEventListener('click', () => {
    wheel.style.transform = `rotate(${value}deg)`;
    value += spinValue;
});