// function diffArray(arr1, arr2) {
//     let combinedArr = [...arr1, ...arr2];
//     let uniqueArr = [...new Set(combinedArr)];
//     let finalArr = [];
//     for (let i = 0; i < uniqueArr.length; i++) {
//         let currentElement = uniqueArr[i];
//         if (!arr1.includes(currentElement) || !arr2.includes(currentElement)) {
//             finalArr.push(currentElement);
//         }
//     }
//     return finalArr;
// }

function diffArray(arr1, arr2) {
    return [...new Set([...arr1, ...arr2])].filter(element => !arr1.includes(element) || !arr2.includes(element));
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 6, 5]);
