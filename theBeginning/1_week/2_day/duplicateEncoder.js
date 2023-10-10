/*

The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

*/

function isitunique(word,char) {
  for (let k = 0 ; k < word.length ; k++) {
      if (word[k].toLowerCase() === word[char].toLowerCase() && k !== char) {
        return false
      }
    }
  return true
}

function duplicateEncode(word){
  let result = '';
  for (let k = 0 ; k < word.length ; k++) {
    if (isitunique(word,k)) {
      result = result +'(';
    } else {
      result = result +')';
    }
  }
  return result;
}