/**
 * 217. Contains Duplicate
Solved
Easy
Topics
premium lock icon
Companies
Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

 

Example 1:

Input: nums = [1,2,3,1]

Output: true

Explanation:

The element 1 occurs at the indices 0 and 3.

Example 2:

Input: nums = [1,2,3,4]

Output: false

Explanation:

All elements are distinct.

Example 3:

Input: nums = [1,1,1,3,3,4,3,2,4,2]

Output: true

 

Constraints:

1 <= nums.length <= 105
-109 <= nums[i] <= 109
 * 
 * @param {*} array 
 * @returns 
 */
// 


// map 
function duplicate(array){
    let map = new Map()
    for (let i =0;i<array.length;i++){
        let find = map.has(array[i])
        if(find){
            return true 
        }else{
            map.set(array[i])
        }  
    }
    return false
}
console.log(duplicate([1,2,3,4,1]))

//set
function duplicate(array){
    let set = new Set()

for (let i =0;i<array.length;i++){
    let find =  set.has(array[i])
    if(find){
        return true
    }else{
        set.add(array[i])
    }
}
}
console.log(duplicate([1,2,3,4,1]))



//set shortest version 
let array =[1,2,3,4,1]

let  duplicate= array=> new Set(array).size !==array.length
console.log(duplicate(array))