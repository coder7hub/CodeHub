const arr1 = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" }
];

const arr2 = [
    { id: 1, score: 95 },
    { id: 2, score: 87 },
    { id: 4, score: 78 }
];

function join(arr1, arr2) {
    let result = [];

    // Loop through each element in arr1
    for (let i = 0; i < arr1.length; i++) {
        // Loop through each element in arr2
        for (let j = 0; j < arr2.length; j++) {
            // Check if ids match
            if (arr1[i].id === arr2[j].id) {
                // Merge the two objects
                let merged = { ...arr1[i], ...arr2[j] };
                // Add to result
                result.push(merged);
            }
        }
    }

    // Return the final joined array
    return result;
}

// Print the result in readable JSON format
console.log(JSON.stringify(join(arr1, arr2), null, 2));
