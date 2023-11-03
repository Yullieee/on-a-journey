/*

Define a function that removes duplicates from an array of non negative numbers and returns it as a result.

The order of the sequence has to stay the same.

*/

function distinct(a) {
  return a.filter((a, i, b) => b.indexOf(a) === i);
}