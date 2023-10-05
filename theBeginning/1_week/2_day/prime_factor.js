function isPrime(num) {                                         //yay we can use the function we previously made for this kata!! c:

    if (num === 2) {
        return true;
    }
    if (num < 2 || num % 2 === 0) {
        return false;
    }

    let limit = Math.sqrt(num)+1;

    for (let k = 3 ; k <= limit ; k+=2) {

        if (num % k === 0) { return false }
    }
    return true;
}

function primeFactors(n) {

    if (isPrime(n)) { return "(" + n + ")"; }                   //we check if the given number is already a prime and return in the requested format

    let result = "";

    for (let i = 2; i <= n; i++) {

        if (isPrime(i) && n % i === 0) {                        //we check if i is a prime and if it is we check if n can be divided by it

            let count = 0;

            while (n % i === 0) {                               //we initialize a while so that as long as i divided n we keep going and count each time it does
                count += 1;
                n /= i;
            }
            
            if (count > 1) {
                result = result + "(" + i + "**" + count + ")"; //count is actually the power of i
            } else { 
                result = result + "(" + i + ")";            
            }
        }
    }
    return result;
}


const n = 84;
console.log(primeFactors(n));



