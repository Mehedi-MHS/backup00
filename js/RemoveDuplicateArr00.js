//removing duplicates from an array using Set()
let arr=[1,3,1,2,3,true,false,true,"hi",true,2];
let unique=[...new Set(arr)];
console.log(unique);
// [1,3,2,true,false,"hi"]