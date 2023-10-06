function createPhoneNumber(numbers){
  
  let [a,b,c,d,e,f,g,h,i,j] = numbers;
  
  return numbers.length > 0 ? `(${a}${b}${c}) ${d}${e}${f}-${g}${h}${i}${j}` : undefined;
  
}

console.log(createPhoneNumber([2,4,6,5,8,7,5,6,6,6]));