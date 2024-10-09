import { searchInput } from "./index.js";


const searchingInsideTable = () => {

    const tableRows = document.querySelectorAll('tbody tr');
    const searchByInput = searchInput.value.toLowerCase();

    tableRows.forEach((row, i) => {

        const tableRowData = row.textContent.toLowerCase();
        const isMatchFound = tableRowData.indexOf(searchByInput) >= 0;

        row.classList.toggle('hide', !isMatchFound);
        row.style.setProperty('--delay', i / 25 + 's'); // for animation
    })

    const visibleRows = document.querySelectorAll('tbody tr:not(.hide)');

    visibleRows.forEach((visibleRow, i) => {
        const isEven = i % 2 === 0;
        visibleRow.style.backgroundColor = isEven ? 'transparent' : '#0000000b';
    });

};


export default searchingInsideTable