/*

Complete the solution so that it returns true if it contains any duplicate argument values. Any number of arguments may be passed into the function.

The array values passed in will only be strings or numbers. The only valid return values are true and false.

Examples:

solution(1, 2, 3)             -->  false
solution(1, 2, 3, 2)          -->  true
solution('1', '2', '3', '2')  -->  true

*/

function solution(...args) {

    let sortedArgs = (args.sort((a, b) => a - b));
    
    for (let i = 0 ; i < sortedArgs.length ; i++) {
      let tempArr = sortedArgs.slice(i+1);
      if (tempArr.includes(sortedArgs[i])) {
        return true;
      }
    }
    return false;
  }