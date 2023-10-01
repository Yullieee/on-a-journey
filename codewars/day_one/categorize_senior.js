function openOrSenior(data){

    let result = [];

    for (let k = 0 ; k < data.length ; k++) {

      if (data[k][0] >= 55 && data[k][1] > 7) {
        result.push('Senior');
      } else {
        result.push('Open');
      }
    }
    
    return result;
  }

console.log(openOrSenior([[20,17],[48,10],[59,8]]));

// Destructuring: [age, handicap] https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
// Arrow Functions: () => {} https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions

function openOrSenior_bestsolution(data){
    return data.map(([age, handicap]) => (age > 54 && handicap > 7) ? 'Senior' : 'Open');
  }