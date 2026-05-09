/**
 * 383. Ransom Note
Solved
Easy
Topics
premium lock icon
Companies
Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

Each letter in magazine can only be used once in ransomNote.

 

Example 1:

Input: ransomNote = "a", magazine = "b"
Output: false
Example 2:

Input: ransomNote = "aa", magazine = "ab"
Output: false
Example 3:

Input: ransomNote = "aa", magazine = "aab"
Output: true
 */

let ransomNote ='a';
let magazine = 'b'


var canConstruct = function(ransomNote, magazine){
const map = new Map();
  for (let char of magazine){
    map.set(char,(map.get(char)||0)+1);
  }
  for(let char of ransomNote){
    if(!map.get(char)) return false

    map.set(char,map.get(char)-1)
  }
  return true 
}
console.log(canConstruct(ransomNote,magazine))