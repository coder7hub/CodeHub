/**
 * Given an array of integers, find the one that appears an odd number of times.

There will always be only one integer that appears an odd number of times.

Examples
[7] should return 7, because it occurs 1 time (which is odd).
[0] should return 0, because it occurs 1 time (which is odd).
[1,1,2] should return 2, because it occurs 1 time (which is odd).
[0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
[1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).
 */
let inp=[1,3,4,4,2,4];

// for (let i=0; i<inp.length;i++){
//     let count=0
//     for(let j=0;j<inp.length;j++){
//         if (inp[i]===inp[j]){
//            count++ 
//         }
//     }

//     if (count%2!==0){
//         console.log(inp[i])
//         break;
//     }
// }

 
let  arr =[1,2,3,4,5,6];

console.log(arr.reduce((a,b)=>a+b))