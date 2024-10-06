import renderAllProjects from './ui/renderAllProjects.js';
import handleFilter from './ui/handleFilter.js';
import handleSearch from './ui/handleSearch.js';
import projects from './db/projectList.js';


export const totalProject = document.getElementById('totalProject');
const searchInput = document.getElementById('searchInput');


handleFilter(projects);

renderAllProjects(projects);

// Search input listener to filter projects
searchInput.addEventListener('input', (e) => handleSearch(e, projects));