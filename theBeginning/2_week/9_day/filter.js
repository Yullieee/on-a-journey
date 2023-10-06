function arrayDiff(a, b) {
  
  if (a.length === 0) { 
    return a;
  }
  
  let result = [];
  
  for (let i = 0 ; i < a.length ; i++) {
    if (!(b.includes(a[i]))) {
      result.push(a[i]);
    }
  }
  return result;
}

console.log(arrayDiff([2,4,6,8,10],[2,4]));