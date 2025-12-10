/**
 * Returns the minimum and maximum values from an array.
 *
 * @param {number[]} numbers - Array of numbers
 * @returns {number[]} An array with the minimum and maximum values [min, max]
 */
function minMax(numbers) {
    // Find the minimum value in the array
    const min = Math.min(...numbers);
    
    // Find the maximum value in the array
    const max = Math.max(...numbers);
    
    // Return them as a new array
    return [min, max];
}

// Example usage
const array = [1, 2, 3, 4, 5, 6, 7];
const result = minMax(array);

console.log(result); // Output: [1, 7]

