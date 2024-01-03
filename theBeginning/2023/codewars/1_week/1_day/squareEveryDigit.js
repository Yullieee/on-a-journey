/*

Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1. (81-1-1-81)

Example #2: An input of 765 will/should return 493625 because 72 is 49, 62 is 36, and 52 is 25. (49-36-25)

Note: The function accepts an integer and returns an integer.

Happy Coding!

*/

function squareDigits(num){
    
    let str = num.toString();                    //we convert the given number into a string, for example 50 -> '50'
    let n = [];

    if (num === 0 ) {
        return num
    }

    for (let k = 0 ; k < str.length ; k++) {    //we go through the string we created to put each number to the power of 2
        n[k] = parseInt(str[k]*str[k]);         //before we put the number into the empty array we transform it from a string to a number thanks to parseInt(), note that Number() also works
    }

    return parseInt(n.join(''));
}

const n = 1414;
console.log(squareDigits(n));

function squareDigits_bestsolution(num){
    return Number(('' + num).split('').map(function (val) { return val * val;}).join(''));
    
  }