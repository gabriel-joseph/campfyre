// arrays - ordered list of values
const listOfNumbers = [1, 3, 5, 7, 9];

console.log("for loop");

/**
 * For loop
 * i is the counter
 * Starts at 0 to include the first index
 * Loops through the array using i < listOfNumbers.length to prevent out-of-bounds errors
 */
for (let i = 0; i < listOfNumbers.length; i++) {
  console.log(`${listOfNumbers[i]}'s index is ${i}`);
}

console.log("\nfor...of loop");

/**
 * for...of loop
 * Iterates directly over array values
 * You don't get an index!
 */
for (const num of listOfNumbers) {
  console.log(`${num} is in the array`);
}

console.log("\nforEach loop");

/**
 * forEach loop
 * Cleaner syntax, index is optional
 */
listOfNumbers.forEach((num, index) =>
  console.log(`${num}'s index is ${index}`)
);

console.log("\nwhile loop");

let counter = 0;
/**
 * While loop
 * Continues as long as the counter is less than the array's length
 * Note the same < length syntax
 */
while (counter < listOfNumbers.length) {
  console.log(`${listOfNumbers[counter]}'s index is ${counter}`);
  counter += 1;
}



/**
 * 
 * Basic looping notes: nums.length vs nums.length - 1
 * 
 * - nums.length: Loop through the entire array.
 * - nums.length - 1: Stop early (e.g., if comparing current element with next).
 * 
 * Use i < nums.length to stop before going out of bounds.
 * Use i <= nums.length - 1 to explicitly include the last element.
 */
