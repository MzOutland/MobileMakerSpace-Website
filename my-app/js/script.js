// Display a welcome message in the browser console
console.log("Welcome to my webpage!");

// Change the text color of an element
function changeTextColor() {
    const heading = document.querySelector("h1");
    heading.style.color = "blue";
}

// Create a JSON array for the 3D printers
const printers = [
  {
    "model": "Ender 3 V2",
    "manufacturer": "Creality",
    "printSpeed": 180,
    "buildVolume": 220000,
    "price": 249.99
  },
  {
    "model": "Prusa i3 MK3S+",
    "manufacturer": "Prusa Research",
    "printSpeed": 200,
    "buildVolume": 250000,
    "price": 749.99
  },
  {
    "model": "Ultimaker S3",
    "manufacturer": "Ultimaker",
    "printSpeed": 300,
    "buildVolume": 215000,
    "price": 4499.00
  }
];

// Call function to create the table
generatePrinterTable() {
  // Get the <tbody> element where rows will be added
  const tableBody = document.querySelector("#printerTable tbody");

  // Loop through the printers array
  printers.forEach(printer => {
    // Create a new table row
    const row = document.createElement("tr");

    // Add a cell for each property of the printer
    Object.values(printer).forEach(value => {
      const cell = document.createElement("td");
      cell.textContent = value; //Set the cell text
      row.appendChild(cell); // Add the cell to the row
    });

    // Append the row to the table body
    tableBody.appendChild(row);
  });
}

// Call the function to generate the table when the page loads
document.addEventListener("DOMContentLoaded", generatePrinterTable);
// Change the text color of an element
function changeTextColor() {
  const heading = document.querySelector("h1");
  heading.style.color = "blue";
}

// Example: Log printer data to the console
function logPrinters() {
  console.log("3D Printer Information:", printers);
}

// Call functions for testing
changeTextColor();
logPrinters();
