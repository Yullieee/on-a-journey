/*

You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

Examples
[7, 1]  =>  [1, 7]
[5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
[9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

*/


function sortArray(array) {

  let odds = array.filter(a => a % 2 === 1 || a % 2 === -1).sort((a,b) => a-b);
  let filteredArr = array.map(a => {
    if (a % 2 === 1 || a % 2 === -1) {
      return '*';
    }
    return a;
  });
  
  for (let i = 0 ; i < odds.length ; i++) {
    for (let j = 0 ; j < filteredArr.length ; j++) {
      if (filteredArr[j] === '*') {
        filteredArr[j] = odds[i];
        break;
      }
    }
  }
  return (filteredArr)
}