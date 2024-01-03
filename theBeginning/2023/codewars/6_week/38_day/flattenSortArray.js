/*

Challenge:

Given a two-dimensional array of integers, return the flattened version of the array with all the integers in the sorted (ascending) order.

*/

function flattenAndSort(array) {
  let newArr = [];
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      newArr.push(array[i][j]);
    }
  }
  newArr.sort((a, b) => a - b);
  return newArr;
}


const flattenAndSort = (array) => array.flat().sort((a, b) => a-b);