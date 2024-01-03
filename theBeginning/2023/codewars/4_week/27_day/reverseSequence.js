//Build a function that returns an array of integers from n to 1 where n>0.

const reverseSeq = n => {
  let result = [n];
  while (n > 1) {
    n--;
    result.push(n);
  }
  return result;
};