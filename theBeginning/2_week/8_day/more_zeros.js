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