function nbYear(p0, percent, aug, p) {
  
  let year = 0;
  let sum = p0;
  let r = (1+percent/100);
    
  if (p0 === p) { return year }
    
  while (sum < p) {
      
    sum = Math.floor(sum*r);
    sum += aug;
    year++;
      
  }
    
  return year;
}

console.log(nbYear(1000, 5, 100, 2000));