/**
 * 387. First Unique Character in a String
Solved
Easy
Topics
premium lock icon
Companies
Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

 

Example 1:

Input: s = "leetcode"

Output: 0

Explanation:

The character 'l' at index 0 is the first character that does not occur at any other index.

Example 2:

Input: s = "loveleetcode"

Output: 2

Example 3:

Input: s = "aabb"

Output: -1
 */

let s="leet"

var firstUniqChar = function(s) {
   // check and increase if the character repeat 
    let count = new Map()
    for (let i=0;i<s.length;i++){
        if(count.has(s[i])){
             
             count.set(s[i], count.get(s[i]) + 1);
          
        }else{
            count.set(s[i],1)
        }
    }
    // now check wich one in first time has one time of 
    for(let i =0; i<s.length;i++){
        if (count.get(s[i])==1){
            return i
        }
    }
    return -1
};
console.log(firstUniqChar(s))


