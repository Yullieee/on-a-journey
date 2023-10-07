function digPow(n, p){                            //find out if n*k = a^p+b^(p+1)+c(p+2)... with a, b, c, ... digits
  
  const arr_n = n.toString().split('');
  let sum = 0;
  
  for (let i = 0 ; i < arr_n.length ; i++) {
    sum += Math.pow(arr_n[i],p+i);
  }
  
  let k = 0;
  
  while (sum !== n*k && n*k < sum) {
    k++;
  }
  
  return sum === n*k ? k : -1;
  
}

console.log(digPow(46288,3));