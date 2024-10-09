import generateTableRows from "./generateTableRows.js";
import searchingInsideTable from "./searching.js";
import tableData from "./tableData.js";


export const searchInput = document.querySelector('.input-group input');


generateTableRows(tableData);


// 🔎 searching for specific data in HTML table
searchInput.addEventListener('input', searchingInsideTable);