function is_it_unique(word,char) {

  for (let k = 0 ; k < word.length ; k++) {

      if (word[k].toLowerCase() === word[char].toLowerCase() && k !== char) {
        return false;
      }
    }
  return true;
}
  
function duplicateEncode(word){

  let result = '';

  for (let k = 0 ; k < word.length ; k++) {

    if (is_it_unique(word,k)) {
      result = result +'(';
    } else {
       result = result +')';
    }
  }
  return result;
}

const word = "yummy chocolat!";
console.log(duplicateEncode(word));

function duplicateEncode_bestsolution(word){
  return word
    .toLowerCase()
    .split('')
    .map( function (a, i, w) {
      return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')'
    })
    .join('');
}

