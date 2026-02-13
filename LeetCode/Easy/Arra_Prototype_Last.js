/**
 * 2619. Array Prototype Last
 * 
 * Enhances all arrays with a `.last()` method.
 * This method returns the last element of the array.
 * If the array is empty, it returns -1.
 * 
 * Examples:
 * 
 * const nums = [null, {}, 3];
 * console.log(nums.last()); // 3
 * 
 * const empty = [];
 * console.log(empty.last()); // -1
 * 
 * Constraints:
 * - The array is a valid JSON array
 * - 0 <= array.length <= 1000
 */

// Example array
let array = [1, 2, 3, 4, 5, 6, 7, 8];

/**
 * Approach 1: Using if/else statement
 * 
 * - Checks if the array has elements
 * - Returns the last element if present
 * - Returns -1 if the array is empty
 */
Array.prototype.last = function () {
    if (this.length > 0) {
        return this[this.length - 1];
    } else {
        return -1;
    }
};

console.log(array.last()); // 8

/**
 * Approach 2: Using ternary operator (shorter)
 * 
 * - Concise one-liner version
 * - Same behavior as if/else
 */
Array.prototype.last = function () {
    return this.length > 0 ? this[this.length - 1] : -1;
};

console.log(array.last()); // 8
