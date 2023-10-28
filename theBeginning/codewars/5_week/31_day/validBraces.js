/*

Write a function that takes a string of braces, and determines if the order of the braces is valid. It should return true if the string is valid, and false if it's invalid.

This Kata is similar to the Valid Parentheses Kata, but introduces new characters: brackets [], and curly braces {}. Thanks to @arnedag for the idea!

All input strings will be nonempty, and will only consist of parentheses, brackets and curly braces: ()[]{}.

What is considered Valid?
A string of braces is considered valid if all braces are matched with the correct brace.

Examples
"(){}[]"   =>  True
"([{}])"   =>  True
"(}"       =>  False
"[(])"     =>  False
"[({})](]" =>  False

*/

function validBraces(str) {

  const stack = [];
  const openingBraces = "({[";
  const closingBraces = ")}]";

  for (let brace of str) {
    if (openingBraces.includes(brace)) {
      stack.push(brace);
    } else if (closingBraces.includes(brace)) {
      const lastOpeningBrace = stack.pop();
      if (
        (brace === ')' && lastOpeningBrace !== '(') ||
        (brace === '}' && lastOpeningBrace !== '{') ||
        (brace === ']' && lastOpeningBrace !== '[')
      ) {
        return false;
      }
    }
  }
  return stack.length === 0;
}