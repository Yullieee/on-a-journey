/*

Given three arrays of integers, return the sum of elements that are common in all three arrays.

For example:

common([1,2,3],[5,3,2],[7,3,2]) = 5 because 2 & 3 are common in all 3 arrays
common([1,2,2,3],[5,3,2,2],[7,3,2,2]) = 7 because 2,2 & 3 are common in the 3 arra

*/

function common(a, b, c) {
  let sum = 0;
  let countB = {};
  let countC = {};
  for (let num of b) {
    countB[num] = (countB[num] || 0) + 1;
  }
  for (let num of c) {
    countC[num] = (countC[num] || 0) + 1;
  }
  for (let num of a) {
    if (countB[num] > 0 && countC[num] > 0) {
      sum += num;
      countB[num]--;
      countC[num]--;
    }
  }
  return sum;
}
