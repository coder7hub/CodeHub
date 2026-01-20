/**
 * Consecutive strings
 * 
 * You are given an array (list) strarr of strings and an integer k. 
 * Your task is to return the first longest string consisting of k consecutive strings taken in the array.
 *
 * Examples:
 * strarr = ["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"], k = 2
 * Concatenate the consecutive strings of strarr by 2, we get:
 * treefoling   (length 10)  concatenation of strarr[0] and strarr[1]
 * folingtrashy (length 12)  concatenation of strarr[1] and strarr[2]
 * trashyblue   (length 10)  concatenation of strarr[2] and strarr[3]
 * blueabcdef   (length 10)  concatenation of strarr[3] and strarr[4]
 * abcdefuvwxyz (length 12)  concatenation of strarr[4] and strarr[5]
 * 
 * Two strings are the longest: "folingtrashy" and "abcdefuvwxyz".
 * The first that appears is "folingtrashy", so the function should return it.
 * 
 * Edge cases:
 * - If k <= 0, return ""
 * - If k > array length, return ""
 * - If the array is empty, return ""
 * 
 * Note:
 * Consecutive strings mean strings that follow one after another without interruption.
 */

let arr = ["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"];
let k = 2;

function Str(arr, k) {
  // Step 1: Handle edge cases
  if (k <= 0 || k > arr.length || arr.length === 0) return '';

  // Step 2: Variable to store the longest string found so far
  let ans = '';

  // Step 3: Loop through all valid starting indices
  // i goes from 0 up to arr.length - k
  for (let i = 0; i < arr.length - k + 1; i++) {
    // Step 4: Combine k consecutive strings starting at index i
    let current = arr.slice(i, i + k).join('');

    // Step 5: Check if the combined string is longer than previous longest
    if (current.length > ans.length) {
      ans = current; // update longest string
    }
  }

  // Step 6: Return the longest string found
  return ans;
}

// Test the function
console.log(Str(arr, k)); // Outputs: "folingtrashy"
