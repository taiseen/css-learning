// 3 January 2024

const inputRange = document.getElementById('inputRange');
const rangeValue = document.getElementById('rangeValue');


inputRange.addEventListener('mousemove', (e) => {
    const { value } = e.target;
    rangeValue.innerHTML = value;
});