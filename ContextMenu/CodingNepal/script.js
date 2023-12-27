// 26 Dec 2023

const contextMenu = document.querySelector(".wrapper");
const shareMenu = contextMenu.querySelector(".share-menu");

const handleContextMenu = e => {
    e.preventDefault();

    let x = e.offsetX;
    let y = e.offsetY;
    const winWidth = window.innerWidth;
    const winHeight = window.innerHeight;
    const cmWidth = contextMenu.offsetWidth;
    const cmHeight = contextMenu.offsetHeight;

    const dynamicWidth = winWidth - cmWidth;
    const dynamicHeight = winHeight - cmHeight;

    if (x > (dynamicWidth - shareMenu.offsetWidth)) {
        shareMenu.style.left = "-200px";
    } else {
        shareMenu.style.right = "-200px";
        shareMenu.style.left = "";
    }

    x = x > dynamicWidth ? dynamicWidth - 5 : x;
    y = y > dynamicHeight ? dynamicHeight - 5 : y;

    contextMenu.style.left = `${x}px`;
    contextMenu.style.top = `${y}px`;
    contextMenu.style.visibility = "visible";
}

window.addEventListener("contextmenu", handleContextMenu);

document.addEventListener("click", () => contextMenu.style.visibility = "hidden");