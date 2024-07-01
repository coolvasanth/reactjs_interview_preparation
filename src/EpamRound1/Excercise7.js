// Demonstrate removing duplicates from a sorted array using both a 
// Set and vanilla JavaScript methods.

/************************ Using set ******************************/ 

const numbers = [1, 2, 3, 1, 2, 4];
// Create a Set from the array. Sets only store unique values.
const uniqueNumbers = new Set(numbers);
// Convert the Set back to an array (optional)
const uniqueNumbersArray = [...uniqueNumbers];
console.log(uniqueNumbersArray); // Output: [1, 2, 3, 4]

/******************* Using Built in Methods ***********************/ 

const numbers2 = [1, 2, 3, 1, 2, 4];

const uniqueNumbers2 =numbers.filter((value, index, self) => {
  // Check if the current element's first occurrence is at the current index
  return self.indexOf(value) === index;
});

console.log(uniqueNumbers2); // Output: [1, 2, 3, 4]
