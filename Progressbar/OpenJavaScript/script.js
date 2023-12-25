// 26 December 2023

// https://www.youtube.com/watch?v=9biknk9SecY

// XMLHttpRequest base file uploading system


const file = document.getElementById('file');
const uploadBtn = document.getElementById('uploadBtn');
const progressBar = document.getElementById('progressBar');


const handleUploadProgress = (e) => {
    const percentageComplete = (e.loaded / e.total) * 100;

    progressBar.setAttribute('value', percentageComplete);
    progressBar.nextElementSibling.nextElementSibling.innerHTML =
        Math.round(percentageComplete) + '%'
}


const handleLoad = (request) => {
    console.log(request.status);
    console.log(request.response);
}


const handleFileUploadBtn = () => {

    const uploadedFile = file.files[0];
    if (!uploadedFile) return;

    const payload = new FormData();
    payload.append('user-image', uploadedFile);

    const method = 'POST';
    const url = 'https://httpbin.org/post';

    const request = new XMLHttpRequest();
    request.open(method, url);

    request.upload.addEventListener('progress', handleUploadProgress);
    request.addEventListener('load', () => handleLoad(request));
    request.send(payload);
}


uploadBtn.addEventListener('click', handleFileUploadBtn);

