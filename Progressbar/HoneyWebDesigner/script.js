// 26 - Dec - 2023

const progressLabel = document.getElementById('progressLabel');
const fileUpload = document.getElementById('fileUpload');
const feedback = document.getElementById('feedback');
const progress = document.getElementById('progress');


const handleFileReaderProgress = (e) => {
    const fileName = e.target.fileName;
    const loaded = e.loaded;
    const total = e.total;

    if (loaded && total) {
        const percentageOk = (loaded / total) * 100;
        progress.value = percentageOk;
        progressLabel.innerHTML = Math.round(percentageOk) + '%';

        if (percentageOk === 100) {
            const sms = `<b>File:</b> ${fileName} Uploaded successfully...`
            feedback.innerHTML = sms;
        }
    }
}

const handleFileUpload = (e) => {

    const files = e.target.files;
    const file = files[0];

    const reader = new FileReader();
    reader.fileName = file.name;
    reader.readAsDataURL(file);

    reader.addEventListener('progress', handleFileReaderProgress);
}

fileUpload.addEventListener('change', handleFileUpload);
