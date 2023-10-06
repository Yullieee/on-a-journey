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