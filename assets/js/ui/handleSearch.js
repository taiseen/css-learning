import renderAllProjects from "./renderAllProjects.js";
import { totalProject } from "../index.js";

const handleSearch = (e, projects) => {

    const userInput = e.target.value.toLowerCase();

    // Filter the projects based on user input (matching project name only)
    const filteredProjects = projects.filter((project) =>
        project.name.toLowerCase().includes(userInput) // Match only in project name (anchor link)
    );

    // Render the filtered projects
    renderAllProjects(filteredProjects, userInput);

    // Update total project count for filtered results
    totalProject.innerText = filteredProjects.length;
}

export default handleSearch;