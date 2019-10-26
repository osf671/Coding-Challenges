// function characterMapping(str) {
//     let charArr = str.split('');
//     let uniqueArr = Array.from(new Set(charArr));
//     return charArr.map(num => uniqueArr.indexOf(num))  
// }

function characterMapping(str) {
    if (str.length === 0) {
        return [];
    };
    let finalArr = [];
    let charMap = {};
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (charMap[str[i]] !== undefined) {
            finalArr.push(charMap[str[i]]);
        } else {
            charMap[str[i]] = count;
            finalArr.push(count);
            count++
        }
    }
    return finalArr;
}

console.log(characterMapping("fluffy"))