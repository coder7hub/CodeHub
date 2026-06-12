/**125. Valid Palindrome
Solved
Easy
Topics
premium lock icon
Companies
A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.

 

Example 1:

Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.
Example 2:

Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.
Example 3:

Input: s = " "
Output: true
Explanation: s is an empty string "" after removing non-alphanumeric characters.
Since an empty string reads the same forward and backward, it is a palindrome.
 

Constraints: */

let s =""

var isPalindrome = function(s) {  
    // lower case
    let lower= s?.toLowerCase();
    // new array 
    let clean=[]
    // keep letter and numbers
    for (let character of lower){
        if (/[a-z0-9]/.test(character)){
          clean.push(character)
        }
    }
    // convert array to the string
    let cleanString = clean.join("")
   
    // check for  the palindrome logic 
    let reversedString = cleanString.split('').reverse().join('')
    for (let i =0;i<cleanString.length;i++){
       if (cleanString[i] !== reversedString[i]){
        return false
       }
    }
    return true 
    
};
console.log(isPalindrome(s))
