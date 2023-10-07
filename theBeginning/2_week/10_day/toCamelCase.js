function toCamelCase(str){
  
  if (!str) {
    return '';
  }
  
  let alphabet = 'abcdefghijklmnopqrstuvwxyzABDCEFGHIJKLMNOPQRSTUVWXYZ';
  let result = str[0];
  
  for (let i = 1 ; i < str.length ; i++) {
    
    if (alphabet.includes(str[i])) {
      if (alphabet.includes(str[i-1])) {
        result += str[i];
      } else {
        result += str[i].toUpperCase();
      }
    } else if (str[i] === '-') {
      i++;
      if (i < str.length && alphabet.includes(str[i])) {
        result += str[i].toUpperCase();
      }
    }
  }
  return result;
}

console.log(toCamelCase('the lonely girl'));