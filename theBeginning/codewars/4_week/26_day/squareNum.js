/*

Complete the square sum function so that it squares each number passed into it and then sums the results together.

For example, for [1, 2, 2] it should return 9 

*/


function squareSum(numbers){
  return numbers.map(x => x**2).reduce((tot,n) => tot + n,0);
}