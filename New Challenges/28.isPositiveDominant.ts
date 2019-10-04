function isPositiveDominant(a) {
    let unique = [...new Set(a)];
    console.log(unique) 
    let count = 0;
    for (let currentNum of unique) {
        if (currentNum > 0) {
            count += 1;
        } else if (currentNum < 0) {
            count -= 1;
        }
    }
    return count > 0? true : false;
}

console.log(isPositiveDominant([5, 4, 3, 0, 0, -1, -1, -2, -2]))