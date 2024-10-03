import projects from './db.js';

const container = document.getElementById('container');
const totalProject = document.getElementById('totalProject');

totalProject.innerText = projects.length;


// checking this project is running at live || local?
const getBaseUrl = () => {

    const { hostname, origin } = window.location;

    const gitUrl = 'https://taiseen.github.io/learning-css-js/'; // GitHub Live URL

    return hostname === '127.0.0.1' || hostname === 'localhost'
        ? origin + '/'
        : gitUrl;
}


// Set the base URL dynamically
const baseUrl = getBaseUrl();


// Function to render projects in the UI
const renderAllProjectsInUI = (projectsToDisplay) => {

    // Clear the container before rendering new results
    container.innerHTML = '';

    // Loop through each project and create an anchor element
    projectsToDisplay.forEach((project, idx) => {

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


        // Set attributes
        anchorLink.setAttribute('href', `${baseUrl}${project.link}`); // Dynamically set the URL
        anchorLink.setAttribute('rel', 'noopener noreferrer');
        anchorLink.setAttribute('target', '_blank');
        anchorLink.textContent = project.name; // Set the inner text of the anchor


        // Append elements
        projectBox.appendChild(spanContext);
        projectBox.appendChild(spanNumber);
        projectBox.appendChild(anchorLink);


        // Append projectBox to the container
        container.appendChild(projectBox);

        // <div class="projectBox">
        //     <span class="projectNumber"> 1 </span>
        //     <span class="projectContext"> Css + Js </span>
        //     <a class="anchorLink" href="#"> DEMO </a>
        // </div> 
    });
}


renderAllProjectsInUI(projects);