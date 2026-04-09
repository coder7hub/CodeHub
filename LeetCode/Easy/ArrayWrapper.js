/**
 * 2695. Array Wrapper
 * Easy
 *
 * Problem:
 * Create a class ArrayWrapper that accepts an array of integers in its constructor.
 * The class should support:
 *
 * 1. Addition (+) between two instances:
 *    - Returns the sum of all elements in both arrays.
 *
 * 2. String conversion:
 *    - Returns a string representation of the array in the format: "[1,2,3]"
 *
 * Examples:
 *
 * Input:
 *   const obj1 = new ArrayWrapper([1,2]);
 *   const obj2 = new ArrayWrapper([3,4]);
 *   obj1 + obj2;
 * Output: 10
 *
 * Input:
 *   const obj = new ArrayWrapper([23,98,42,70]);
 *   String(obj);
 * Output: "[23,98,42,70]"
 *
 * Input:
 *   const obj1 = new ArrayWrapper([]);
 *   const obj2 = new ArrayWrapper([]);
 *   obj1 + obj2;
 * Output: 0
 *
 * Constraints:
 * - 0 <= nums.length <= 1000
 * - 0 <= nums[i] <= 1000
 */


// ==============================
// Class-based approach (modern)
// ==============================

class ArrayWrapper {
    constructor(array) {
        this.array = array;
    }

    [Symbol.toPrimitive](hint) {
        if (hint === "number") {
            return this.array.reduce((a, b) => a + b, 0);
        }

        if (hint === "string") {
            return `[${this.array.join(",")}]`;
        }

        // default fallback
        return this.array.reduce((a, b) => a + b, 0);
    }
}


// Example usage
const obj1 = new ArrayWrapper([1, 2]);
const obj2 = new ArrayWrapper([1, 1]);

console.log(obj1 + obj2);     // 5
console.log(String(obj1));    // "[1,2]"


// ==================================
// Prototype-based approach (LeetCode)
// ==================================

/**
 * @param {number[]} nums
 * @return {void}
 */
var ArrayWrapper = function (nums) {
    this.array = nums;
};

/**
 * @return {number}
 */
ArrayWrapper.prototype.valueOf = function () {
    return this.array.reduce((a, b) => a + b, 0);
};

/**
 * @return {string}
 */
ArrayWrapper.prototype.toString = function () {
    return `[${this.array.join(",")}]`;
};