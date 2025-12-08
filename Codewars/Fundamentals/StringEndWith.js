/**
 * String Ends With?
 *
 * Complete the function so that it returns true if the first argument (a string)
 * ends with the second argument (also a string). Otherwise, return false.
 *
 * Examples:
 *   endsWith('abc', 'bc')  => true
 *   endsWith('abc', 'd')   => false
 *
 * @param {string} str - The main string to check
 * @param {string} ending - The string to test against the end of str
 * @returns {boolean} - True if str ends with ending, false otherwise
 */

const endsWith = (str, ending) => str.endsWith(ending);

// Example usage
const inp1 = 'abc';
const inp2 = 'c';

console.log(endsWith(inp1, inp2)); // Output: true
