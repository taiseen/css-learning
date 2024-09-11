import projects from './db.js';


const container = document.getElementById('container');
const totalProject = document.getElementById('totalProject');


const gitUrl = 'https://taiseen.github.io/learning-css-js/';


totalProject.innerText = projects.length;


// Loop through each project and create an anchor element
projects.forEach((project, idx) => {

    // Create the anchor element
    const anchor = document.createElement('a');
    const span = document.createElement('span');


    // 🔶 Set the required attributes || for local live Link
    // anchor.setAttribute('href', project.link);


    // 🔶 Set the required attributes || for gitHub live Link
    anchor.setAttribute('href', `${gitUrl}${project.link}`);


    // anchor.setAttribute('rel', 'noopener noreferrer');
    anchor.setAttribute('target', '_blank');


    // Set the inner text of the anchor
    anchor.textContent = project.name;

    span.textContent = idx + 1;

    anchor.appendChild(span);

    // Append the anchor to the container
    container.appendChild(anchor);
});
