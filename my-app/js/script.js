// Display a welcome message in the browser console
console.log("Welcome to my webpage!");

// Change the text color of an element
function changeTextColor() {
  const heading = document.querySelector("h1");
  heading.style.color = "blue";
}

// Sample 3D Printer Data
const printerData = [
  {
    model: "Ender 3 V2",
    manufacturer: "Creality",
    speed: "180",
    volume: "220x220x250",
    price: "279"
  },
  {
    model: "Prusa i3 MK3S+",
    manufacturer: "Prusa Research",
    speed: "200",
    volume: "250x210x210",
    price: "999"
  },
  {
    model: "Ultimaker S3",
    manufacturer: "Ultimaker",
    speed: "300",
    volume: "230x190x200",
    price: "4200"
  },
  {
    model: "Anycubic Kobra",
    manufacturer: "Anycubic",
    speed: "180",
    volume: "220x220x250",
    price: "319"
  }
];

// Function to populate the table
function populatePrinterTable() {
  const tableBody = document.querySelector("#printerTable tbody");

  printerData.forEach(printer => {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${printer.model}</td>
      <td>${printer.manufacturer}</td>
      <td>${printer.speed}</td>
      <td>${printer.volume}</td>
      <td>${printer.price}</td>
    `;

    tableBody.appendChild(row);
  });
}

// Call the function after the DOM is loaded
document.addEventListener("DOMContentLoaded", populatePrinterTable);

// Function to fetch the JSON data and create the table
function fetchPrinterData() {
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
// Verify if #printerTable exists
const printerTable = document.querySelector('#printerTable');
if (printerTable) {
  console.log('#printerTable exists!');
} else {
  console.error('#printerTable is missing!');
}

// Verify if #models-container exists
const modelsContainer = document.querySelector('#models-container');
if (modelsContainer) {
  console.log('#models-container exists!');
} else {
  console.error('#models-container is missing!');
}

// Function to fetch Thingiverse data
function fetchThingiverseData() {
  const client_id = 'cbc36b84ea2ec1f18b3c62753ed65442'; // Replace with Thingiverse API client_id
  const apiUrl = `https://api.thingiverse.com/popular?access_token=5d5ee7e67891e16ffc6ab96232fa752c`;

  fetch(apiUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => displayModels(data))
    .catch(error => console.error('Error fetching Thingiverse data:', error));
}

// Function to display Thingiverse models
function displayModels(models) {
  const container = document.getElementById('models-container');

  if (!container) {
    console.error("Models container not found!");
    return;
  }

  models.forEach(model => {
    const modelElement = document.createElement('div');
    modelElement.innerHTML = `
      <img src="${model.thumbnail}" alt="${model.name}" />
      <h3>${model.name}</h3>
      <a href="${model.public_url}" target="_blank">View on Thingiverse</a>
    `;
    container.appendChild(modelElement);
  });
}

// Call the functions when the page loads
document.addEventListener("DOMContentLoaded", () => {
  fetchPrinterData();      // Fetch and display printer data
  fetchThingiverseData();  // Fetch and display Thingiverse data
});
