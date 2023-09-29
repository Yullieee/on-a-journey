function squareDigits(num){
    let str = num.toString(); //we convert the given number into a string, for example 50 -> '50'
    let n = [];

    if (num === 0 ) {
        return num
    }

    for (let k = 0 ; k < str.length ; k++) { //we go through the string we created to put each number to the power of 2
        n[k] = parseInt(str[k]*str[k]); //before we put the number into the empty array we transform it from a string to a number thanks to parseInt(), note that Number() also works
    }

    return parseInt(n.join(''));
}

const n = 1414;
console.log(squareDigits(n));

function squareDigits_bestsolution(num){
    return Number(('' + num).split('').map(function (val) { return val * val;}).join(''));
    
  }