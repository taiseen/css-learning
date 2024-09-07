// 1 Jan 2022

const btn = document.getElementById('cpnBtn');
const code = document.getElementById('cpnCode');


function copyText() {

    // By clicking, just copy ==> this INNER HTML Content
    navigator.clipboard.writeText(code.innerHTML);
    btn.innerHTML = 'COPIED';
    code.style.textDecoration = 'line-through';

    // after clicking 8 second, reset it.
    setTimeout(() => {
        btn.innerHTML = 'COPY CODE';
        code.style.textDecoration = 'none';
    }, 8000);

    
    alert('Coupon code is: ' + code.innerHTML);
};


btn.addEventListener('click', () => copyText());