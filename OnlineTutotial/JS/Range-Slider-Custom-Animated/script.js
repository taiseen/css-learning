// 14 January 2024

const inputSlider = document.querySelector('input');
const sliderValue = document.querySelector('span');

inputSlider.addEventListener('input', (e) => {

    const value = e.target.value;

    sliderValue.textContent = value;

    sliderValue.style.left = (value / 2) + '%';

    sliderValue.classList.add('show');
})

inputSlider.addEventListener('blur', () => {
    sliderValue.classList.remove('show');
});