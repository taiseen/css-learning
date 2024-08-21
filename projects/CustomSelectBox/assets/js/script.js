// 26 Dec 2021

const text = document.getElementById('selectText');
const list = document.getElementById('list');
const arrow = document.getElementById('arrow');
const options = document.querySelectorAll('.option');
const userClick = document.getElementById('selectField');


userClick.addEventListener('click', () => {
    toggling();
});


options.forEach(option => {
    option.addEventListener('click', () => {
        text.innerHTML = option.innerHTML;
        toggling();
    })
});

const toggling = () => {
    list.classList.toggle('hide');
    arrow.classList.toggle('rotated');
}

