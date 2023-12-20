// Function to generate multiplication tables from 2 to 10
function generateMultiplicationTables() {
  for (var i = 2; i <= 10; i++) {
    console.log(`Multiplication Table for ${i}:`);

    for (var j = 1; j <= 10; j++) {
      console.log(`${i} x ${j} = ${i * j}`);
    }

    console.log(""); // Add an empty line for better readability
  }
}

// Call the function to generate multiplication tables
generateMultiplicationTables();

  