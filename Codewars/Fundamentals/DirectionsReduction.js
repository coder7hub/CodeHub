/**
 * dirReduc - Simplifies a path by removing needless directions.
 *
 * Imagine a man travelling through a wild mountainous desert. He is given 
 * directions such as "NORTH", "SOUTH", "EAST", "WEST". Going one direction 
 * and immediately returning the opposite way is a waste of energy. The goal 
 * is to reduce the path by eliminating such needless steps.
 *
 * Example:
 * ["NORTH","SOUTH","SOUTH","EAST","WEST","NORTH","WEST"] 
 * simplifies to ["WEST"].
 *
 * @param {string[]} arr - Array of directions.
 * @returns {string[]} Simplified array of directions with needless steps removed.
 */
function dirReduc(arr) {
  const output = [];

  for (let i = 0; i < arr.length; i++) {
    if (output.length === 0) {
      // If output is empty, add the first direction
      output.push(arr[i]);
    } else {
      const last = output[output.length - 1];

      // Check if the current direction is opposite to the last one
      if (
        (last === "NORTH" && arr[i] === "SOUTH") ||
        (last === "SOUTH" && arr[i] === "NORTH") ||
        (last === "EAST" && arr[i] === "WEST") ||
        (last === "WEST" && arr[i] === "EAST")
      ) {
        // Remove the last direction if it is opposite
        output.pop();
      } else {
        // Otherwise, add the current direction
        output.push(arr[i]);
      }
    }
  }

  return output;
}

// Example usage:
const inp = ["NORTH", "SOUTH", "EAST", "WEST", "WEST", "WEST"];
console.log(dirReduc(inp)); // Output: ["WEST", "WEST"]
