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