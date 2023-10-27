//Given a string, you have to return a string in which each character (case-sensitive) is repeated once.


function doubleChar(str) {
  let regex = /(.{1})/gi;
  return str.replace(regex, '$1$1');
}