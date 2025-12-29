/**
 * Converts a string to a new string where:
 * - "(" represents a character that appears only once
 * - ")" represents a character that appears more than once
 * Ignores capitalization when determining duplicates.
 *
 * @param {string} word - The input string
 * @returns {string} - The encoded string
 *
 * Examples:
 * duplicateEncode("din")      => "((("
 * duplicateEncode("recede")   => "()()()"
 * duplicateEncode("Success")  => ")())())"
 * duplicateEncode("(( @")     => "))(("
 */
function duplicateEncode(word) {
  const lowercasedWord = word.toLowerCase();
  let encodedString = '';

  for (let i = 0; i < lowercasedWord.length; i++) {
    let isDuplicate = false;

    // Check against all other characters
    for (let j = 0; j < lowercasedWord.length; j++) {
      if (i !== j && lowercasedWord[i] === lowercasedWord[j]) {
        isDuplicate = true;
        break; // Stop checking further once a duplicate is found
      }
    }

    // Append the corresponding symbol
    encodedString += isDuplicate ? ')' : '(';
  }

  return encodedString;
}

// Example usage
const input = 'Dinn';
console.log(duplicateEncode(input)); // Output: (()))
