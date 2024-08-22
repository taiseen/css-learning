// 30 - Jan - 2022 

const root = document.querySelector(':root');
const switchBtn = document.querySelector('.switchBtn');
const allThemeBtn = document.querySelectorAll('.themeBtn');
const colorSwitcher = document.querySelector('.colorSwitcher');


switchBtn.addEventListener('click', () => {

    // just Open & Close color drawer
    colorSwitcher.classList.toggle('userClick');

    // clicking upon any color
    allThemeBtn.forEach(btn => {

        // clicking upon selected color
        btn.addEventListener('click', () => {

            let dataColor = btn.getAttribute('data-color');
            root.style.setProperty('--mainColor', dataColor);

        })
    });
});