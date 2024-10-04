import projects from './db.js';

const totalProject = document.getElementById('totalProject');
const searchInput = document.getElementById('searchInput');
const container = document.getElementById('container');

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


// Helper function to safely highlight matching text without breaking the UI
const highlightText = (text, match) => {
    if (!match) return text; // If no match, return original text

    const regex = new RegExp(`(${match})`, 'gi'); // Case-insensitive regex for the match
    const splitText = text.split(regex); // Split text by the matching parts

    // Wrap matching parts in span and reassemble
    return splitText.map((part) =>
        regex.test(part) ? `<span class="highlight">${part}</span>` : part
    ).join('');
};


// Function to render projects in the UI
const renderAllProjectsInUI = (projectsToDisplay, match = '') => {

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

        // Set the inner text of the anchor
        anchorLink.innerHTML = highlightText(project.name, match); // Highlight match only for project name


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


const handleSearch = (e) => {
    const userInput = e.target.value.toLowerCase();

    // Filter the projects based on user input (matching project name only)
    const filteredProjects = projects.filter((project) =>
        project.name.toLowerCase().includes(userInput) // Match only in project name (anchor link)
    );

    // Render the filtered projects
    renderAllProjectsInUI(filteredProjects, userInput);

    // Update total project count for filtered results
    totalProject.innerText = filteredProjects.length;
}


// Search input listener to filter projects
searchInput.addEventListener('input', handleSearch);