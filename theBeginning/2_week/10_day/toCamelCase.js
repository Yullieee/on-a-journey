/*

Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.

Examples
"the-stealth-warrior" gets converted to "theStealthWarrior"

"The_Stealth_Warrior" gets converted to "TheStealthWarrior"

"The_Stealth-Warrior" gets converted to "TheStealthWarrior"

*/

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