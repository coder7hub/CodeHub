/**
 * 205. Isomorphic Strings
Easy
Topics
premium lock icon
Companies
Given two strings s and t, determine if they are isomorphic.

Two strings s and t are isomorphic if the characters in s can be replaced to get t.

All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

 

Example 1:

Input: s = "egg", t = "add"

Output: true

Explanation:

The strings s and t can be made identical by:

Mapping 'e' to 'a'.
Mapping 'g' to 'd'.
Example 2:

Input: s = "f11", t = "b23"

Output: false

Explanation:

The strings s and t can not be made identical as '1' needs to be mapped to both '2' and '3'.

Example 3:

Input: s = "paper", t = "title"

Output: true

 
 */

let s ="paper";
let t ="title";

var isIsomorphic =(s,t)=>{  
    const sMap= new Map();
    const tMap = new Map();
    for (let i =0; i < s.length; i++){
    // for the S
      if(sMap.has(s[i]) ){
        if(sMap.get(s[i]) === t[i] ){

        }else{
            return false 
        }
      }else{
        sMap.set(s[i],t[i])
      }
     // for the T
      if(tMap.has(t[i])){
        if(tMap.get(t[i])===s[i]){

        }else{
            return false
        }
      }else{
        tMap.set(t[i],s[i])
      }
    }
    return true 
}

console.log(isIsomorphic (s,t))