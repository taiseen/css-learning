const tableBody = document.getElementById('tableBody');

// Function to generate table rows
const generateTableRows = (dataArray) => {

    tableBody.innerHTML = ''; // Clear existing rows

    dataArray.forEach(item => {
        const row = document.createElement('tr');

        row.innerHTML = `
            <td>${item.id}</td>
            <td>
                <img src="${item.img}" alt="" /> ${item.name}
            </td>
            <td>${item.location}</td>
            <td>${item.date}</td>
            <td>
                <p class="status ${item.status.toLowerCase()}">
                    ${item.status}
                </p>
            </td>
            <td>
                <strong>$${item.amount}</strong>
            </td>
      `;

        tableBody.appendChild(row);
    });
}

export default generateTableRows;