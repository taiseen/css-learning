import highLightText from "../utils/highlightText.js";
import getBaseUrl from "../utils/getBaseUrl.js";
import { totalProject } from "../index.js";


const container = document.getElementById('container');

const baseUrl = getBaseUrl(); // Set the base URL dynamically


// Function to render projects in the UI
const renderAllProjects = (projectsToDisplay, match = '') => {

    totalProject.innerText = projectsToDisplay.length;

    // Clear the container before rendering new results
    container.innerHTML = '';

    // Loop through each project and create an anchor element
    projectsToDisplay.forEach((project, idx) => {

        // Create a template string for the HTML structure
        const projectHTML = `
            <div class="projectBox">
                <span class="projectNumber">${idx + 1}</span>
                <span class="projectContext">${project.context}</span>
                <a 
                   href="${baseUrl}${project.link}" 
                   rel="noopener noreferrer"
                   class="anchorLink" 
                   target="_blank" 
                >
                    ${highLightText(project.name, match)} <!-- Highlighted name -->
                </a>
            </div>
        `;

        // Insert the HTML into the container
        container.innerHTML += projectHTML;
    });
}

export default renderAllProjects;