/* Write a function that returns the longest sequence of 
consecutive zeroes in a binary string. */

function longestZero(s) {
    if (!s.includes('0')) {
        return '';
    } 

    let zeroArr = s.split('1').filter(x => x !== '')
    let longestStr = ''; 
    for (let i = 0; i < zeroArr.length; i++) {
        if(zeroArr[i].length > longestStr.length) {
            longestStr = zeroArr[i];
        }
    }
    return longestStr;
}

// function longestZero(s) {
//     return s.split('1').sort().reverse()[0]
// }

console.log(longestZero("1010010000000101"));
console.log(longestZero('1110000110011'))

