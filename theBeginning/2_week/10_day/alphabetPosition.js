/*

Welcome.

In this kata you are required to, given a string, replace every letter with its position in the alphabet.

If anything in the text isn't a letter, ignore it and don't return it.

"a" = 1, "b" = 2, etc.

Example
alphabetPosition("The sunset sets at twelve o' clock.")

*/

function alphabetPosition(text) {
  let alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let result = '';

  for (let i = 0; i < text.length; i++) {
    let char = text[i].toLowerCase();

    if (alphabet.includes(char)) {
      result += alphabet.indexOf(char) + 1;

      if (i !== text.length - 1) {
        result += ' ';
      }
    }
  }

  return result.trim();
}

console.log(alphabetPosition('I am a pretty girl!'));