/*

Given an array of integers, find the one that appears an odd number of times.

There will always be only one integer that appears an odd number of times.

Examples
[7] should return 7, because it occurs 1 time (which is odd).
[0] should return 0, because it occurs 1 time (which is odd).
[1,1,2] should return 2, because it occurs 1 time (which is odd).
[0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
[1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).

*/

function findOdd(A) {

  let counts = {};
  
  for (let i = 0; i < A.length; i++) {

    let digit = A[i];
  
    if (!(digit in counts)) {
      counts[digit] = 1; 
    } else {
      counts[digit]++;
    }
  }
  
  for (let i in counts) {

    if (counts[i] % 2 === 1) {
       return parseInt(i, 10);
    }
  }
  return 0;
}

const A = ['1','5','5','5','1','0','0'];
console.log(findOdd(A));