/*

Given two arrays a and b write a function comp(a, b) (orcompSame(a, b)) that checks whether the two arrays have the "same" elements, with the same multiplicities (the multiplicity of a member is the number of times it appears). "Same" means, here, that the elements in b are the elements in a squared, regardless of the order.

*/


function comp(array1, array2) {
  
  if (array1 === null || array2 === null || array1.length !== array2.length) {
    return false;
  }
  
  const squaredArray1 = array1.map(x => x ** 2);
  
  squaredArray1.sort((a, b) => a - b);
  array2.sort((a, b) => a - b);
  
  return squaredArray1.every((value, index) => value === array2[index]);
}