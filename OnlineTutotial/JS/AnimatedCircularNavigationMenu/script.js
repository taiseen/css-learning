// 31 December 2023

const toggleBtn = document.querySelector('.toggleBtn');
const navMenu = document.querySelector('.navMenu');
const links = document.getElementsByTagName('li');

toggleBtn.addEventListener('click', () => navMenu.classList.toggle('show'));

for (const link of links) {
    link.addEventListener('click', (e) => {
        e.preventDefault();

        const aLink = e.target.getAttribute('href');

        console.log(aLink);
    })
}
