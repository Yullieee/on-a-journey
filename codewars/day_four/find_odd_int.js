function findOdd(A) {

  let counts = {};
  
  for (let i = 0; i < A.length; i++) {

    let digit = A[i];
  
    if (!(digit in counts)) {
      counts[digit] = 1; 
    } else {
      counts[digit]++;
    }
  }
  
  for (let i in counts) {

    if (counts[i] % 2 === 1) {
       return parseInt(i, 10);
    }
  }
  return 0;
}

const A = ['1','5','5','5','1','0','0'];
console.log(findOdd(A));