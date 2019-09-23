function largestOfFour(arr) {
    let maxValArr = [];
    for (let i = 0; i < arr.length; i++) {
        let maxVal = arr[i][0];
        for (let j = 0; j < arr[i].length; j++) {
            let currentVal = arr[i][j];
            if (currentVal > maxVal) {
                maxVal = currentVal;
            }
        }
        maxValArr.push(maxVal);
    }
    console.log(maxValArr)
    return maxValArr;
}

// function largestOfFour(arr) {
//     let finalArr = [];
//     let maxVal = 0;
//     for (let arr1 of arr) {
//       maxVal = Math.max(...arr1);
//       finalArr.push(maxVal);
//     }
//     return finalArr;
//   }

console.log(largestOfFour([[1, 2, 3, 4], [5, 18, 0, 12], [3, 5, 12, 5], [28, 9, 2, 34]]))