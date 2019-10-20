function edaBit(start, end) {
    let numberArr = [];
    for (let i = start; i <= end; i++) {
        numberArr.push(i);
    }
    
    return numberArr.map(number => {
        if (number % 3 === 0 && number % 5 === 0) {
            return 'EdaBit';
        }
        else if (number % 3 === 0) {
            return 'Eda';
        } else if (number % 5 === 0) {
            return 'Bit';
        } else {
            return number;
        }
    })
}

console.log(edaBit(33, 45)) 