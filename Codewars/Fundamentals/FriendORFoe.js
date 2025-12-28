/**
 * Friends Name Filter
 * -------------------
 * This program filters a list of names and returns a new list containing only your friends' names.
 * 
 * Rule: A friend’s name has exactly 4 letters. 
 * Names with fewer or more letters are not friends.
 * 
 * Example:
 * Input: ["Ryan", "Kieran", "Jason", "Yous"]
 * Output: ["Ryan", "Yous"]
 * 
 * Input: ["Peter", "Stephen", "Joe"]
 * Output: []
 * 
 * All input strings contain only letters.
 * The original order of names is preserved in the output.
 */

/** Sample input array */
const names = ["Alpha", "Ilya", "Amon", "hell", "Muhammad"];

/**
 * 1️⃣ Traditional for loop with index
 * - Iterates using an index
 * - Checks name length
 * - Pushes matching names to a new array
 */
const friendsForLoop = [];
for (let i = 0; i < names.length; i++) {
    if (names[i].length === 4) {
        friendsForLoop.push(names[i]);
    }
}
console.log("For loop:", friendsForLoop);

/**
 * 2️⃣ Filter method (recommended modern approach)
 * - Returns a new array with only names of length 4
 * - Very concise and preserves order
 */
const friendsFilter = names.filter(name => name.length === 4);
console.log("Filter:", friendsFilter);

/**
 * 3️⃣ Reduce method
 * - Accumulates names of length 4 into a new array
 * - Useful if you want to do additional processing while filtering
 */
const friendsReduce = names.reduce((acc, name) => {
    if (name.length === 4) acc.push(name);
    return acc;
}, []);
console.log("Reduce:", friendsReduce);

/**
 * 4️⃣ For…of loop
 * - Iterates directly over elements
 * - Cleaner than traditional for loop when index is not needed
 */
const friendsForOf = [];
for (const name of names) {
    if (name.length === 4) {
        friendsForOf.push(name);
    }
}
console.log("For…of loop:", friendsForOf);

/**
 * 5️⃣ Modern one-liner using filter
 * - Concise, readable, and idiomatic in modern JavaScript
 */
const friendsOneLiner = names.filter(name => name.length === 4);
console.log("One-liner filter:", friendsOneLiner);
