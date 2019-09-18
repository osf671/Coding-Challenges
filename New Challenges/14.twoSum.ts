/* Given an array of integers, return indices of the two numbers such 
that they add up to a specific target. You may assume that each input 
would have exactly one solution, and you may not use the same element 
twice.  */

function twoSum (nums, target) {
    let indexArr = [];
    for (let i = 0; i < nums.length; i++) {
        let currentNum = nums[i];
        let matchedIndex = nums.indexOf(target - currentNum);
        if (matchedIndex > -1 && matchedIndex !== i) {
            indexArr.push(i);
        }
    }
    console.log(indexArr)
    return indexArr;
};


twoSum([2, 7, 11, 15], 9);
twoSum([3, 0, 9, 5], 12);
twoSum([8, 33, 20, 15], 23);