/*

There is an array with some numbers. All numbers are equal except for one. Try to find it!

findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
It’s guaranteed that array contains at least 3 numbers.

The tests contain some very huge arrays, so think about performance.

This is the first kata in series:

*/

function findUniq(arr) {
  
  let unique = arr[0];
  
  if (arr[0] !== arr[1] && arr[0] !== arr[2] && arr.length >= 3) {
    return arr[0];
  }
  
  for (let i = 1 ; i < arr.length ; i++) {
    if (arr[i] !== arr[0]) {
      return arr[i];
    }
  }
}

console.log(findUniq([5,4,4,4,4]));