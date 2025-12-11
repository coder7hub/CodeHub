/**
 * Beginner Series #3 – Sum of Numbers
 *
 * Given two integers a and b (positive or negative), return the sum of
 * all integers between them, including both endpoints. If the two numbers
 * are equal, simply return either one.
 *
 * Note: a and b are not guaranteed to be in order.
 *
 * Examples:
 * (1, 0) → 1       // 1 + 0 = 1
 * (1, 2) → 3       // 1 + 2 = 3
 * (0, 1) → 1       // 0 + 1 = 1
 * (1, 1) → 1       // both numbers are the same
 * (-1, 0) → -1     // -1 + 0 = -1
 * (-1, 2) → 2      // -1 + 0 + 1 + 2 = 2
 *
 * Your function should return only the final number.
 */

let a = 8;
let b = 3;

function getSum(a, b) {
  const min = Math.min(a, b);
  const max = Math.max(a, b);
  let total = 0;

  for (let i = min; i <= max; i++) {
    total += i;
  }

  return total;
}

console.log(getSum(a, b));
