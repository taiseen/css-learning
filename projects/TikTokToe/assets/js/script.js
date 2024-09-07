// 22 Dec 2021 

const info = document.getElementById('playingInfo');
const box = document.getElementsByClassName('box');
const reset = document.getElementById('reset');
const line = document.getElementById('line');
const now = document.getElementById('now');

// console.log(box);
// console.log(box[0].children);
// console.log(box[0].firstChild);
// console.log(Array.from(box))


let playerTurn = 'X';
let gameOver = false;


const changeTurn = () => playerTurn === 'X' ? 'O' : 'X';


const checkWin = () => {

    let boxText = document.querySelectorAll('.boxText');

    let winingPossible = [

        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],

        [0, 4, 8],
        [2, 4, 6],

        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
    ];


    winingPossible.forEach(v => {
        if ((boxText[v[0]].innerHTML === boxText[v[1]].innerHTML) &&
            (boxText[v[2]].innerHTML === boxText[v[1]].innerHTML) &&
            (boxText[v[0]].innerHTML !== '')) {
            info.innerHTML = boxText[v[0]].innerHTML + ' is Win';
            info.style.color = 'green';
            info.style.fontWeight = '900';
            line.style.visibility = 'visible';
            gameOver = true;
        }

    })
}



Array.from(box).forEach(parentElement => {

    let childText = parentElement.querySelector('.boxText');

    childText.addEventListener('click', () => {
        if (childText.innerHTML === '') {
            childText.innerHTML = playerTurn;
            playerTurn = changeTurn();
            checkWin();
        }

        if (!gameOver) {
            info.style.display = 'block';
            now.innerHTML = playerTurn;
        }

        console.log(childText.innerHTML);
    });

})



reset.addEventListener('click', () => {
    // line.style.visibility = 'hidden';
    // info.style.display = 'none';
    // info.innerHTML = ' ';


    // playerTurn = 'X';
    // gameOver = false;

    // Array.from(box).forEach(parentElement => {

    //     let childText = parentElement.querySelector('.boxText');
    //     childText.innerHTML = ''
    // })

    location.reload();
})