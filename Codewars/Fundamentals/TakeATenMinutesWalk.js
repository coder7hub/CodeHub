/**
 * Take a Ten Minutes Walk
 * 
 * In the city of Cartesia, all roads form a perfect grid. 
 * Citizens have a Walk Generating App which returns an array of one-letter
 * directions ('n', 's', 'e', 'w') for a walk.
 * 
 * A valid walk satisfies:
 * 1. It takes exactly 10 minutes (array length = 10)
 * 2. It returns to the starting point (north = south, east = west)
 * 
 * This file demonstrates three approaches to validate a walk:
 * 1. Classic for loop using index
 * 2. Cleaner for...of loop
 * 3. Shorter filter-based approach
 * 
 * Each function returns true if the walk is valid, false otherwise.
 */

const exampleWalk = ['n','s','n','s','e','w','e','w','n','s'];

/* ------------------------------------------------
   1️⃣ Classic for loop with index
------------------------------------------------- */
function isValidWalkForIndex(walk) {
  // Counters for each direction
  let northCount = 0;
  let southCount = 0;
  let eastCount = 0;
  let westCount = 0;

  // Loop through the array by index
  for (let i = 0; i < walk.length; i++) {
    if (walk[i] === 'n') northCount++;
    else if (walk[i] === 's') southCount++;
    else if (walk[i] === 'e') eastCount++;
    else if (walk[i] === 'w') westCount++;
  }

  // Check length and balance
  return walk.length === 10 &&
         northCount === southCount &&
         eastCount === westCount;
}

console.log('For index loop:', isValidWalkForIndex(exampleWalk)); // true

/* ------------------------------------------------
   2️⃣ Cleaner for...of loop
------------------------------------------------- */
function isValidWalkForOf(walk) {
  let north = 0, south = 0, east = 0, west = 0;

  // Loop through the array directly using element
  for (const dir of walk) {
    if (dir === 'n') north++;
    else if (dir === 's') south++;
    else if (dir === 'e') east++;
    else if (dir === 'w') west++;
  }

  return walk.length === 10 && north === south && east === west;
}

console.log('For-of loop:', isValidWalkForOf(exampleWalk)); // true

/* ------------------------------------------------
   3️⃣ Shorter filter-based approach
------------------------------------------------- */
function isValidWalkFilter(walk) {
  // Filter creates arrays of each direction and compares their lengths
  return walk.length === 10 &&
         walk.filter(d => d === 'n').length === walk.filter(d => d === 's').length &&
         walk.filter(d => d === 'e').length === walk.filter(d => d === 'w').length;
}

console.log('Filter approach:', isValidWalkFilter(exampleWalk)); // true

