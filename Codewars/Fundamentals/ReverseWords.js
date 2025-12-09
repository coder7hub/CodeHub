/**
 * Reverse words
 *
 * Complete the function that accepts a string parameter, and reverses each word in the string.
 * All spaces in the string should be retained.
 *
 * Examples:
 * "This is an example!" ==> "sihT si na !elpmaxe"
 * "double  spaces"      ==> "elbuod  secaps"
 */

///// Fundamental approach – step by step explanation
let inp = 'This is an example!';
let words = inp.split(' ');

for (let i = 0; i < words.length; i++) {
  let letters = words[i].split('');
  let reverse = '';
  for (let j = letters.length - 1; j >= 0; j--) {
    reverse += letters[j];
  }
  words[i] = reverse; 
}

let result = words.join(' ');
console.log(result); // Output: "sihT si na !elpmaxe"
console.log(inp);    // Original string remains unchanged

/// Cleaner and simpler approach using map and split/join
function reverseWords(str) {
  return str
    .split(' ')
    .map(function(word) {
      return word.split('').reverse().join('');
    })
    .join(' ');
}

// Example usage
console.log(reverseWords('This is an example!')); // "sihT si na !elpmaxe"
console.log(reverseWords('double  spaces'));      // "elbuod  secaps"
