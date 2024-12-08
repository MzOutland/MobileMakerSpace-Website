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
