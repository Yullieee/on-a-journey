function isPrime(num) {

    if (num % 2 === 0 && num !== 2 ) { return false }
    if (num <= 1) { return false }
    if (num === 2) { return true }

    let limit = Math.sqrt(num)+1;
    for (let k = 3 ; k <= limit ; k+=2) {
        if (num % k === 0) { return false }
    }
    return true;
}

console.log(isPrime(5));