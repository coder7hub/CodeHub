/**
 * Chunk Array
 * -----------
 * This function splits an array into smaller subarrays (chunks),
 * each with a maximum length defined by `size`.
 *
 * - The original array order is preserved.
 * - The last chunk may contain fewer elements if the array length
 *   is not evenly divisible by `size`.
 *
 * @param {Array} arr  - The array to be chunked
 * @param {number} size - The maximum size of each chunk
 * @returns {Array[]} An array of chunked subarrays
 */

// Sample input array
const arr = ['Hello', 'JS', '7', 'World', 'Code'];

// Size of each chunk
const size = 2;

// Chunk function
var chunk = function (arr, size) {
  const result = [];

  // Move through the array in steps of `size`
  for (let i = 0; i < arr.length; i += size) {
    // Extract a chunk of length `size` and add it to the result
    result.push(arr.slice(i, i + size));
  }

  return result;
};

// Output the result
console.log(chunk(arr, size));
