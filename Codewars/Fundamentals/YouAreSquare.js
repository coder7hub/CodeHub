/**
 * You're a square!
 * A square of squares
 *
 * You like building blocks. You especially like building blocks that are squares.
 * And what you even like more, is to arrange them into a square of square building blocks!
 *
 * However, sometimes, you can't arrange them into a square. Instead, you end up
 * with an ordinary rectangle! Those blasted things!
 *
 * If you just had a way to know whether you're currently working in vain…
 * Wait! That's it! You just have to check if your number of building blocks
 * is a perfect square.
 *
 * Task:
 * Given an integral number, determine if it's a square number.
 *
 * In mathematics, a square number (or perfect square) is an integer that is
 * the square of an integer; in other words, it is the product of some integer
 * with itself.
 *
 * Examples:
 *  -1  => false
 *   0  => true
 *   3  => false
 *   4  => true
 *  25  => true
 *  26  => false
 */

// Test value
let num = 16;

/**
 * Iterative approach using a loop
 * Time complexity: O(√n)
 */
function square(num) {
  if (num < 0) {
    return false;
  }

  for (let i = 0; i * i <= num; i++) {
    if (i * i === num) {
      return true;
    }
  }

  return false;
}

console.log(square(num));

/**
 * Using the remainder operator with Math.sqrt
 * Checks if the square root is a whole number
 */
const isSquare = (num) => num >= 0 && Math.sqrt(num) % 1 === 0;

console.log(isSquare(num));

/**
 * Using Math.sqrt() and Number.isInteger()
 * Most readable and expressive approach
 */
function isPerfectSquare(num) {
  // Negative numbers cannot be perfect squares
  if (num < 0) {
    return false;
  }

  const squareRoot = Math.sqrt(num);
  return Number.isInteger(squareRoot);
}

// Examples
console.log(isPerfectSquare(25)); // true
console.log(isPerfectSquare(10)); // false
console.log(isPerfectSquare(0));  // true (0 * 0 = 0)
console.log(isPerfectSquare(-4)); // false
