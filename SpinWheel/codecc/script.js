// 30 - December - 2023

const centerCircle = document.querySelector(".centerCircle");
const inputArea = document.querySelector(".inputArea");

const items = document.getElementsByTagName("textarea");
const winner = document.getElementById('winner');
const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = canvas.width;
const height = canvas.height;
const radius = width / 2;
const centerX = width / 2;
const centerY = height / 2;

const toRed = (degree) => degree * (Math.PI / 180.0);

const easeOutSine = (x) => Math.sin(x * Math.PI / 2);

const randomRange = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

// get percentage between 2 numbers...
const getPercentage = (input, min, max) => (((input - min) * 100) / (max - min)) / 100;

const randomColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);

    return { r, g, b };
}

let inputItems = items[0].value.split("\n");

let currentDegree = 0;
let steps = 360 / inputItems.length;
let colors = [];
inputItems.forEach(item => colors.push(randomColor()));

const circleDraw = () => {
    context.beginPath();
    context.arc(centerX, centerY, radius, toRed(0), toRed(360));
    context.fillStyle = `rgb(${33},${33},${33})`;
    context.lineTo(centerX, centerY);
    context.fill();
}

const draw = () => {
    circleDraw();

    let startDegree = currentDegree;

    for (let i = 0; i < inputItems.length; i++, startDegree += steps) {
        let endDegree = startDegree + steps;

        let border = 30;
        let color = colors[i];
        let colorStyle = `rgb(${color.r},${color.g},${color.b})`;
        let colorStyleBorder = `rgb(${color.r - border},${color.g - border},${color.b - border})`;

        context.beginPath();
        // red = toRed(360 / steps);
        context.arc(centerX, centerY, radius - 2, toRed(startDegree), toRed(endDegree));
        context.fillStyle = colorStyleBorder;
        context.lineTo(centerX, centerY);
        context.fill();

        context.beginPath();
        // red = toRed(360 / steps);
        context.arc(centerX, centerY, radius - border, toRed(startDegree), toRed(endDegree));
        context.fillStyle = colorStyle;
        context.lineTo(centerX, centerY);
        context.fill();

        // draw text
        context.save();
        context.translate(centerX, centerY);
        context.rotate(toRed(startDegree + endDegree) / 2);
        context.fillStyle = (color.r > 150 || color.g > 150 || color.b > 150) ? '#000' : '#FFF';
        context.textAlign = 'center';
        context.font = 'bold 24px sans-serif';
        context.fillText(inputItems[i], 130, 10);
        context.restore();

        // check winner
        if (
            startDegree % 360 < 360 &&
            startDegree % 360 > 270 &&
            endDegree % 360 > 0 &&
            endDegree % 360 < 90
        ) {
            winner.innerText = inputItems[i];
        }
    }
}

draw();

let speed = 0;
let pause = false;
let maxRotation = randomRange(360 * 3, 360 * 6);

const animation = () => {
    if (pause) return;

    speed = easeOutSine(getPercentage(currentDegree, maxRotation, 0)) * 20;

    if (speed < .01) {
        speed = 0;
        pause = true;
    }

    currentDegree += speed;
    draw();
    window.requestAnimationFrame(animation);
}

const spin = () => {
    if (speed != 0) return;
    currentDegree = 0;
    maxRotation = randomRange(360 * 3, 360 * 6);
    pause = false;
    window.requestAnimationFrame(animation);
}

centerCircle.addEventListener('click', () => spin());

const userNewInput = () => {
    let inputItems = document.getElementsByTagName("textarea")[0].value.split("\n");
    steps = 360 / inputItems.length
    let colors = [];
    inputItems.forEach(item => colors.push(randomColor()));

    draw();
}

