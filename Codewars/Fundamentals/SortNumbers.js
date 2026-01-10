/*
 * Finish the solution so that it sorts the passed in array of numbers. If the function passes in an empty array or null/nil value then it should return an empty array.

For example:

solution([1, 2, 10, 50, 5]); // should return [1,2,5,10,50]
solution(null); // should return []
 */

// .sort() method 
function solution(arr) {
  if (arr === null || arr.length === 0) {
    return [];
  }

  return arr.sort((a, b) => a - b);
}

console.log(solution([1, 3, 2, 4, 5, 7, 6])); 
console.log(solution(null));             
console.log(solution([]));

//

