// Function to generate a random car model
function getRandomCarModel() {
    const carModels = ["Sedan", "SUV", "Truck", "Convertible", "Hatchback"];
    return carModels[Math.floor(Math.random() * carModels.length)];
}

// Number of cars to generate
const numberOfCars = 4;

// Array to store car objects
const cars = [];

// Generating an array of car objects using a while loop
let carCounter = 1;
while (carCounter <= numberOfCars) {
    const car = {
        brand: `Brand ${carCounter}`,
        model: getRandomCarModel(),
        year: 2022 + carCounter,
        color: `Color ${carCounter}`
    };
    cars.push(car);
    carCounter++;
}

// Displaying the array of car objects
console.log("List of Cars:");
let index = 0;
while (index < cars.length) {
    console.log(`Car ${index + 1}: Brand - ${cars[index].brand}, Model - ${cars[index].model}, Year - ${cars[index].year}, Color - ${cars[index].color}`);
    index++;
}
