import renderAllProjects from "./renderAllProjects.js";


const filterItems = document.querySelectorAll('.filter p');


const handleFilter = (projects) => {

    filterItems.forEach(pTag => {

        pTag.addEventListener('click', () => {
            // 🟢 1st:- Remove 'active' class from all items
            filterItems.forEach(tag => tag.classList.remove('active'));

            // 🟢 2nd:- Add 'active' class to the clicked item
            pTag.classList.add('active');

            // Get the clicked filter value
            const filterValue = pTag.textContent.toLowerCase(); // Ensure case-insensitivity

            // Filter projects based on context
            let filteredProjects;

            if (filterValue === 'all') {
                // Show all projects when "all" is clicked
                filteredProjects = projects;
            } else {
                // Filter projects exactly by context
                filteredProjects = projects.filter(project => {

                    // Convert context and filter to lowercase for matching
                    const contexts = project.context.toLowerCase().split('+')[1];

                    return contexts
                        ? contexts.includes(filterValue)
                        : project.context.toLowerCase().includes(filterValue);
                });
            }

            renderAllProjects(filteredProjects);
            totalProject.innerText = filteredProjects.length;

        });
    });
}

export default handleFilter;