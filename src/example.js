// This file has linting errors
const unusedVar = 'this is unused';

function myFunction() {
  console.log("Using double quotes");
  let x = 5
  // Missing semicolon
  return x
}

myFunction();