/**
 * The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers.
 *
 * For example:
 * Input: [-2, 1, -3, 4, -1, 2, 1, -5, 4]
 * Output: 6 (Sum of [4, -1, 2, 1])
 *
 * Easy case is when the list is made up of only positive numbers and the maximum sum is the sum of the whole array.
 * If the list is made up of only negative numbers, return 0 instead.
 * Your solution should be fast, it will be tested on very large arrays so slow solutions will time out.
 *
 * Empty list is considered to have zero greatest sum.
 * Note that the empty list or array is also a valid sublist/subarray.
 */

let inp = [-2, 1, -3, 4, -1, 2, 1, -5, 4]; // your input array

function maxSubarraySum(arr) {
    let max = 0;   // maximum sum found so far
    let sum = 0;   // running sum of the current subarray

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];        // add current number to running sum
        if (sum > max) {
            max = sum;        // update max if running sum is bigger
        }
        if (sum < 0) {
            sum = 0;          // reset running sum if it drops below 0
        }
    }

    return max; // return the maximum subarray sum
}

console.log(maxSubarraySum(inp)); // Output: 6
