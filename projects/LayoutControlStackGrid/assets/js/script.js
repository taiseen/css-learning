// 11 Jan 2022

const grid = document.querySelector('a.grid');
const stack = document.querySelector('a.stack');
const articles = document.querySelectorAll('article');


stack.addEventListener('click', () => {

    articles.forEach(article => {
        article.classList.add('stack');
    });
});


grid.addEventListener('click', () => {

    articles.forEach(article => {
        article.classList.remove('stack');
    });
});