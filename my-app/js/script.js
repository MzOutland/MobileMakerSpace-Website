// Display a welcome message in the browser console
console.log("Welcome to my webpage!");

// Change the text color of an element
function changeTextColor() {
    const heading = document.querySelector("h1");
    heading.style.color = "blue";
}

// Function to fetch the JSON data and create the table
function fetchPrinterData() {
  // Fetch the JSON data from the file
  fetch('printers.json') // Adjust the path if the file is in a subfolder
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json(); // Parse the JSON data
    })
    .then(data => generatePrinterTable(data)) // Pass the data to the table
    .catch(error => console.error('Error fetching data:', error));
}

// Function to generate the table from the JSON data
function generatePrinterTable(data) {
  const tableBody = document.querySelector("#printerTable tbody");

  if (!tableBody) {
    console.error("Table body not found!");
    return;
  }

  data.forEach(printer => {
    const row = document.createElement('tr');

    Object.values(printer).forEach(value => {
      const cell = document.createElement('td');
      cell.textContent = value;
      row.appendChild(cell);
    });

    // Append the row to the table body
    tableBody.appendChild(row);
  });
}

// Call the function to fetch data when the page loads
document.addEventListener("DOMContentLoaded", fetchPrinterData);
