/*

Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.

Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case

*/

var countBits = function(n) {
  let binaryRepresentation = n.toString(2);
  console.log(binaryRepresentation);
  let countOne = 0;
  for (let i = 0 ; i < binaryRepresentation.length ; i++) {
    if (binaryRepresentation[i] === '1') {
      countOne++;
    }
  }
  return countOne;
};

console.log(countBits(555)); //binaryRepresentation = 1000101011 countOne hence equals 5