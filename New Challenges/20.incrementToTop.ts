
function incrementToTop(arr) {
    let step = 0; 
    for (let i = 0; i < arr.length; i++) {
        let currentNum = arr[i];
        step += findLargestNum(arr) - currentNum;
    }
    return step; 
}

function findLargestNum(arr) {
    let maxVal = 0;
    for (let i = 0; i < arr.length; i++) {
        let currentVal = arr[i];
        if (currentVal > maxVal) {
            maxVal = currentVal;
        }
    }
    return maxVal; 
}

// function incrementToTop(arr) {
//     let largestNum = Math.max(...arr);
//     return arr.reduce((acc, num) => acc + (largestNum - num), 0)
// }
console.log(incrementToTop([1, 2, 3, 4, 5]))
// console.log(findLargestNum([1, 2, 3, 4, 5]))