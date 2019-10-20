function consecutiveCombo(a1, a2) {
    let combinedArr = [...a1, ...a2];
    let uniqueArr = combinedArr.filter((item, index, arr) => arr.indexOf(item) === index);
    let numberOfItem = Math.max(...uniqueArr) - Math.min(...uniqueArr) + 1;
    if (uniqueArr.length === numberOfItem) {
        return true;
    }
    return false;
}

console.log(consecutiveCombo([1, 4, 5, 6], [2, 3, 7, 8, 10]))