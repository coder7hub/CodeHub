let nums = [2,2,1,1,1,2,2]

var majorityElement = function(nums) {
    let num = new Map();

    // Count frequency of each number
    for (let i = 0; i < nums.length; i++) {
        if (num.has(nums[i])) {
            // Get current count and add 1
            num.set(nums[i], num.get(nums[i]) + 1);
        } else {
            // First time seeing this number, start at 1
            num.set(nums[i], 1);
        }
    }

    // Find the number that appears more than n/2 times
    let n = Math.floor(nums.length / 2);
    for (let [key, value] of num.entries()) {
        if (value > n) {
            return key;  // return the number itself, not the count
        }
    }
};

console.log(majorityElement(nums)); // Output will depend on input