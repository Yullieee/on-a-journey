function positiveSum(arr) {
  return arr.reduce((a,b)=> a + (b > 0 ? b : 0),0);
}

/*

function positiveSum(arr) {
  let sum = 0;
  for (let i = 0 ; i < arr.length ; i++) {
    if (arr[i] > 0) {
      sum += arr[i];
    }
  }
  return sum
}

*/