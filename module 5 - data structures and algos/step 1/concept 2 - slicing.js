// slice

const numbers = [1, 4, 77, 4, 2];

const middle = Math.floor(numbers.length / 2);
const firstHalf = numbers.slice(0, middle);
const secondHalf = numbers.slice(middle);

console.log(firstHalf);  // Output: [1, 4]
console.log(secondHalf); // Output: [77, 4, 2]


// cloning

const originalArray = [1, 2, 3];
const clonedArray = originalArray.slice();

console.log(clonedArray); // Output: [1, 2, 3]



// splicing

const fruits = ['apple', 'banana', 'cherry', 'date', 'fig'];

// Remove 'banana' and 'cherry'
const removedFruits = fruits.splice(1, 2);

console.log(fruits);         // Output: ['apple', 'date', 'fig']
console.log(removedFruits);  // Output: ['banana', 'cherry']
