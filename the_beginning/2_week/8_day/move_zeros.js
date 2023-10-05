function moveZeros(arr) {
  
  let countZero = 0;
  
  for (let i = 0 ; i < arr.length ; i++) {
    if (arr[i] === 0) {
      countZero++;
      arr.splice(i,1);
      i--;
    }
  }
  while (countZero !== 0) {
    arr.push(0);
    countZero--;
  }
  return arr;
}