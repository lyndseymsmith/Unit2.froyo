//Split the user's input into an array
//Build an object to track flavors observed
//Use a loop to iterate through the array of flavors

function countFlavors(userInput) {
  const flavors = userInput.split(",");
  console.log(flavors);

  const numFlavors = {};

  for (let flavor of flavors) {
    if (numFlavors[flavor]) {
      numFlavors[flavor]++;
    } else {
      numFlavors[flavor] = 1;
    }
  }
  return numFlavors;
}

//Prompt user to enter a list of froyo flavors to order, separated by commas
//Display a table showing how many of each flavor they ordered

let userInput = prompt(
  "Enter a list of froyo flavors separate by commas (no spaces):"
);

const order = countFlavors(userInput);
console.table(order);
