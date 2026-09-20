const fs = require('fs');

const fileName = process.argv[2];
// Check if the user forgot to enter a file name
if (!fileName) {

    // Display a simple error message
  console.log('Missing file name');

  // Stop the program
  return;
}
// Check if the file exists
if (!fs.existsSync(fileName)) {

  // Display an error message
  console.log('File not found');

  // Stop the program
  return;
}
const content = fs.readFileSync(fileName, 'utf-8');
const lines = content.split('\n');
const firstLines = lines.slice(0, 3);
const lastLines = lines.slice(-3);
console.log('First 3 lines:');
console.log(firstLines.join('\n'));
console.log('Last 3 lines:');
console.log(lastLines.join('\n'));