let nums1=[4,9,5];
let nums2=[9,4,9,8,4]
var intersection = function(nums1, nums2) {  
    let duplicate = new Set() 
    for (let i = 0; i<nums1.length;i++){
        for(let j=0;  j<nums2.length; j++){
           if (nums1[i]===nums2[j]){
            duplicate.add(nums1[i])
           }else{
             
           }
        }
    }  
    return [...duplicate] ;   
};
console.log(intersection(nums1,nums2))