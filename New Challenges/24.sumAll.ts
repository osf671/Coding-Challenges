// function sumAll(arr) {
//     let sortedArr = arr.sort((a, b) => a - b);
//     let newArr = [];
//     for (let i = sortedArr[0]; i <= sortedArr[1]; i++) {
//         newArr.push(i);
//     }
//     return newArr.reduce((a, b) => a + b, 0);
//   }

function sumAll(arr) {
    var sum = 0;
    for (var i = Math.min(...arr); i <= Math.max(...arr); i++){
        sum += i;
    }
  return sum;
}

sumAll([5, 10]);