// 3 January 2024

const boxContainer = document.querySelector('.boxContainer');

const createBox = () => {

    const box = document.createElement('div'); // create new div element...
    box.classList.add('box'); // add class to every box, div element...

    // add moue enter event to every box, div element...
    box.addEventListener('mouseenter', (e) => {

        const boxDiv = e.target;
        boxDiv.style.backgroundColor = '#C559F7'; // change div background color

        setTimeout(() => {
            boxDiv.style.backgroundColor = 'transparent'; // change div background color
        }, 1000);

    });

    return box;
}


// Function for creating the entire grid of boxes
const createBoxGrid = () => {

    // Reset the boxContainer to contain nothing
    boxContainer.innerHTML = '';

    // Set the number off rows and columns, relative to the screen height and width 
    const columns = Math.floor(window.innerWidth / 50);
    const rows = Math.floor(window.innerHeight / 50);

    // Set the rows and columns CSS properties to the new values
    boxContainer.style.setProperty("--columns", columns);
    boxContainer.style.setProperty("--rows", rows);

    /* Add the appropriate amount of boxes to the boxContainer 
       based on the previous column and row calculations */
    for (let i = 0; i < columns * rows; i++) {
        boxContainer.appendChild(createBox());
    }
}


//Run the grid function on page Load
createBoxGrid();

// Load the grid function, whenever the browser window is resized by the user
// (Re-calculate the amount of tiles needed to fill up the entire screen)
window.onresize = () => createBoxGrid();