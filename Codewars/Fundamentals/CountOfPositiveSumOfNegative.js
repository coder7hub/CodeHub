/**
 * Counts positive numbers and sums negative numbers in an array.
 *
 * @param {number[] | null} input - Array of integers
 * @returns {number[]} An array where:
 *  - index 0 is the count of positive numbers
 *  - index 1 is the sum of negative numbers
 *
 * Rules:
 * - 0 is neither positive nor negative
 * - If input is null or empty, an empty array is returned
 *
 * Example:
 * countPositivesSumNegatives([1, 2, 3, -4, -5])
 * // → [3, -9]
 */
function countPositivesSumNegatives(input) {
  if (!Array.isArray(input) || input.length === 0) {
    return [];
  }

  let positiveCount = 0;
  let negativeSum = 0;

  for (const num of input) {
    if (num > 0) {
      positiveCount++;
    } else if (num < 0) {
      negativeSum += num;
    }
  }

  return [positiveCount, negativeSum];
}

// Example usage
console.log(
  countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 10, -11, -12, -13, -14, -15])
);
// → [7, -65]
