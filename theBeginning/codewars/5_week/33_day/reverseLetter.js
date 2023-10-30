// Given a string str, reverse it and omit all non-alphabetic characters.

function reverseLetter(str) {
  return str.split('').reverse().join('').replace(/[^a-zA-Z]/g, '');
}