const tableHeadings = document.querySelectorAll('thead th');
const tableRows = document.querySelectorAll('tbody tr');


const sortingData = (columnIdx, isAsc) => {
    const tableRows = document.querySelectorAll('tbody tr');

    const uiEffect = [...tableRows].sort((a, b) => {
        const firstRowValue = a.querySelectorAll('td')[columnIdx].textContent.trim();
        const secondRowValue = b.querySelectorAll('td')[columnIdx].textContent.trim();

        // Attempt to parse values as numbers
        const firstValue = isNaN(firstRowValue) ? firstRowValue : parseFloat(firstRowValue);
        const secondValue = isNaN(secondRowValue) ? secondRowValue : parseFloat(secondRowValue);

        // Compare values based on the sorting order
        if (firstValue < secondValue) return isAsc ? -1 : 1;
        if (firstValue > secondValue) return isAsc ? 1 : -1;

        return 0; // Equal values
    });

    const tableBody = document.querySelector('tbody');
    
    uiEffect.forEach(sortedRow => tableBody.appendChild(sortedRow));
};



const sortTableData = () => {

    tableHeadings.forEach((head, colIdx) => {

        let isAsc = true;

        head.onclick = () => {

            tableHeadings.forEach(head => head.classList.remove('active'));
            head.classList.add('active');

            const allCells = document.querySelectorAll('td');
            allCells.forEach(td => td.classList.remove('active'));

            tableRows.forEach(row => {
                const allCells = row.querySelectorAll('td');
                allCells[colIdx].classList.add('active');
            })

            head.classList.toggle('asc', isAsc);
            isAsc = head.classList.contains('asc') ? false : true;

            sortingData(colIdx, isAsc);
        }
    })
}


export default sortTableData;