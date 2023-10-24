/*

Task
Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with a lower index. If you get an empty array/list, return an empty array/list.

Don't change the order of the elements that are left.

*/

function removeSmallest(numbers) {

  if (numbers.length === 0) { 
    return []; 
  }

  let arr = numbers.slice();
  let min = arr[0];
  let minIndex = 0;

  for (let i = 0 ; i < arr.length ; i++) {
    if (arr[i] < min) {
      min = arr[i];
      minIndex = i;
    }
  }

  arr.splice(minIndex, 1);
  
  return arr;
}