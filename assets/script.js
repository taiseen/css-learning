import projects from './db.js';


const container = document.getElementById('container');
const totalProject = document.getElementById('totalProject');


const gitUrl = 'https://taiseen.github.io/learning-css-js/';


totalProject.innerText = projects.length;


// Loop through each project and create an anchor element
projects.forEach((project, idx) => {

    // Create element
    const projectBox = document.createElement('div');
    const spanContext = document.createElement('span');
    const spanNumber = document.createElement('span');
    const anchorLink = document.createElement('a');


    // Assign different class names...
    projectBox.className = 'projectBox';
    spanNumber.className = 'projectNumber';
    spanContext.className = 'projectContext';
    anchorLink.className = 'anchorLink';

    

    // Assign values
    spanNumber.textContent = idx + 1;
    spanContext.textContent = project.context;


    // anchorLink.setAttribute('href', project.link); // 🔴🔴🔴 for local live link
    anchorLink.setAttribute('href', `${gitUrl}${project.link}`); // 🔴🔴🔴 for gitHub live link
    anchorLink.setAttribute('rel', 'noopener noreferrer');
    anchorLink.setAttribute('target', '_blank');
    anchorLink.textContent = project.name; // Set the inner text of the anchor


    // Append elements
    projectBox.appendChild(spanContext);
    projectBox.appendChild(spanNumber);
    projectBox.appendChild(anchorLink);


    // Append projectBox to the container
    container.appendChild(projectBox);

});



{/* 
    <div class="projectBox">
        <span class="projectNumber"> 1 </span>
        <span class="projectContext"> Css + Js </span>
        <a class="anchorLink" href="#"> DEMO </a>
    </div> 
*/}