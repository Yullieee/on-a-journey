/*

Create a moreZeros function which will receive a string for input, and return an array (or null terminated string in C) containing only the characters from that string whose binary representation of its ASCII value consists of more zeros than ones.

You should remove any duplicate characters, keeping the first occurrence of any such duplicates, so they are in the same order in the final array as they first appeared in the input string.

Examples

'abcde' === ["1100001", "1100010", "1100011", "1100100", "1100101"]
               True       True       False      True       False
                   
        --> ['a','b','d']
    
'DIGEST'--> ['D','I','E','T']

*/

function binaryHasMoreZeros(char) {
  
    let binaryRepresentation = char.charCodeAt(0).toString(2);
    let countZero = 0;
    let countOne = 0;

    for (let i = 0 ; i < binaryRepresentation.length ; i++) {
        if (binaryRepresentation[i] === '0') {
        countZero++;
        } else if (binaryRepresentation[i] === '1') {
        countOne++;
        }
    }
    return (countZero > countOne)
}


function moreZeros(s){

    let result = [];
    
    for (let i = 0; i < s.length ; i++) {
        if (binaryHasMoreZeros(s[i]) && !(result.includes(s[i]))) {
            result.push(s[i]);
        }
    }
    return result;
}