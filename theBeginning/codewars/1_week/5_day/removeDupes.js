/*

Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

Examples:
a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"

a = "abcdefghijklmnopqrstuvwxyz"
longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

*/

function sort(string) {

  let swap = false;
  let split = string.split('');

  for (let i = 0 ; i < split.length - 1 ; i++) {
  
    if (split[i] > split[i+1]) {
      
      let temp = split[i];
      split[i] = split[i+1];
      split[i+1] = temp;
      swap = true;
    }
  }

  if (swap) {
    return sort(split.join(''));
  } else {
    return split.join('');
  }
}

function remove_dupes(s) {
  
  let result = '';
  
  for (let i = 0 ; i < s.length ; i++) {
    let char = s[i];
    
    if (result.indexOf(char) === -1) {
      result += char;
    }
  }
  return result;
}

function longest(s1, s2) {
  return sort(remove_dupes(s1+s2));
}
