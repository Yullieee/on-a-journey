function findOutlier(integers){
  let even = [0,0];
  let odd = [0,0];
  for (let i = 0 ; i < integers.length ; i++) {
    if (integers[i] % 2 === 0) {
      even[0] = integers[i];
      even[1] += 1;
    } else {
      odd[0] = integers[i];
      odd[1] += 1;
    }
  }
  return even[1] === 1 ? even[0] : odd[0];
}

