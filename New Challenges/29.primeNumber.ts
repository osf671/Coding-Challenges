function primeNumbers(num) {
    if (num < 0) {
        return 0;
    } else {
        let primeNumArr = [];
        for (let i = 2; i <= num; i++) {
            let isPrime = true;
            for (let factor = 2; factor < i; factor++) {
                if (i % factor === 0) {
                    isPrime = false;
                    break;
                }
            }
            if (isPrime) {
                primeNumArr.push(i);
            }
        }
        return primeNumArr.length;
    }
}


console.log(primeNumbers(100))