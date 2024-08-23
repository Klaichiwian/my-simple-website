// Sample data
const data = [
    { id: 1, category: 'category1', value: 10 },
    { id: 2, category: 'category2', value: 20 },
    { id: 3, category: 'category1', value: 30 },
    { id: 4, category: 'category2', value: 40 },
];

// Initialize Chart.js
const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Category 1', 'Category 2'],
        datasets: [{
            label: 'Values',
            data: [40, 60], // Sample data
            backgroundColor: ['rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)'],
            borderColor: ['rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)'],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// Populate the data table
function populateTable(filteredData) {
    const tableBody = document.querySelector('#dataTable tbody');
    tableBody.innerHTML = ''; // Clear existing rows

    filteredData.forEach(row => {
        const tr = document.createElement('tr');
        tr.innerHTML = `<td>${row.id}</td><td>${row.category}</td><td>${row.value}</td>`;
        tableBody.appendChild(tr);
    });
}

// Filter data based on dropdown selection
document.getElementById('dataFilter').addEventListener('change', function() {
    const filterValue = this.value;
    const filteredData = filterValue === 'all' ? data : data.filter(item => item.category === filterValue);
    populateTable(filteredData);
});

// Initial population of the table
populateTable(data);
