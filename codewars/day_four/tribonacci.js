function tribonacci(signature,n){

  let result = [];

  if (n === 0) { 
    return result 
  }

  result = signature;

  for (let i = 0; i < n-2; i++) {

    let tribonaci = result[i]+result[i+1]+result[i+2];

    result.push(tribonaci);
  }
  return result.slice(0,n);
}

const arr = [0,1,3];
console.log(tribonacci(arr,10));