function matrix(x, y, z) {
    let finalArr = [];
    for (let i = 1; i <= x; i++) {
        let arr = [];
        for (let j = 1; j <= y; j++) {
            arr.push(z)
        }
        finalArr.push(arr);
    }
    return finalArr;
}

console.log(matrix(2, 3, "#"))