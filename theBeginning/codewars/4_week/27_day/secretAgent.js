/*

Hello, fellow Warrior!
Or, should I say, Secret Agent?
This is your chance to prove that you are true spy material, and not just some amateur with a tuxedo!
The first step on your way to the double 0 is also the most important: Learn how to craft and decode a secret password to communicate safely with other agents.

THE KATA

This Kata will be divided in two parts.
In the first, you will create a function that takes a string as argument and returns a jumbled string, with the following rules and restrictions:

The input string MUST be a 9 characters long word (made only of lowercase letters from "a" to "z" of the English alphabet). If the argument doesn't meet this requirement (or no argument at all is passed to the function), it must return ```"BANG!"``` (there are no second chances in the spy world!)
The string must be divided in 3 equal parts of 3 characters each:
The first and third letter will be converted to the corresponding number, according to the English alphabet (ex. a = 1, b = 2, c = 3 ... z = 26, etc.)
The fourth, fifth and sixth letter will be reversed
The seventh, eight and ninth letter will be substituted with the letter that follows them in the English alphabet (z will be substituted with a)
Finally, the returned string must be in the following order: Part 2, Part 3 and Part 1

Examples:
```encrypt("jamesbond"); //should return: "bsepoe10a13"``` ```encrypt("I'll kill you, 007!"); //should return "BANG!"```
In the second part of the Kata, you will create another function that takes a jumbled password and acts as follows:


It decrypts the password argument, reversing the rules and following the same restrictions set in part 1 of the kata;
It compares the decrypted string to an array of secret passcodes (you can't see the passcodes, but you can test if yours is present in the array).
- Watch out: Not all of the secret passcodes are valid strings! -
It must return:
```"Nice to meet you, fellow Agent!"``` if the passcode is both valid and contained in the array, or;
```"BANG!"``` if the passcode is not in the array, or if the string is not valid

Examples:
```decrypt("bsepoe10a13"); //should return: "Nice to meet you, fellow Agent!"``` ```decrypt("How are you still alive, 007??"); //should return "BANG!"```

*/

//Section 1: Encryption
function encrypt(passcode) {
  
  if (!passcode || passcode.length !== 9 || !/^[a-z]+$/.test(passcode)) {
   return "BANG!";
 }

 const alphabet = 'abcdefghijklmnopqrstuvwxyz';

 let firstPart = (alphabet.indexOf(passcode[0])+1) + passcode[1] + (alphabet.indexOf(passcode[2])+1);

 let secondPart = passcode.slice(3,6).split('').reverse().join('');

 let str = passcode.slice(6,9);
 let thirdPart = '';

 for (let i = 0 ; i < str.length ; i++) {
   let index = (alphabet.indexOf(str[i])+1)%26;
   if (index > 25) {
     index -= 25;
   }
   thirdPart += alphabet[index];
 }
 return (secondPart + thirdPart + firstPart)
}

//Section 2: Decryption
var validPasscodes = passcodes; // Do not change this! Only the boss knows all the passcodes,
                               // but you can still check through this var

function decrypt(password) {
 if (!password) {
   return "BANG!";
 }

 const alphabet = 'abcdefghijklmnopqrstuvwxyz';

 const encryptedLetters = password.slice(6).match(/\d+/g);

 if (!encryptedLetters || encryptedLetters.length !== 2) {
   return "BANG!";
 }

 const firstLetterIndex = parseInt(encryptedLetters[0]) - 1;
 const thirdLetterIndex = parseInt(encryptedLetters[1]) - 1;

 if (firstLetterIndex < 0 || firstLetterIndex >= 26 || thirdLetterIndex < 0 || thirdLetterIndex >= 26) {
   return "BANG!";
 }

 const firstLetter = alphabet[firstLetterIndex];
 const thirdLetter = alphabet[thirdLetterIndex];
 const secondLetter = password.slice(6).match(/[a-z]/)[0]

 const firstPart = firstLetter + secondLetter + thirdLetter;

 const secondPart = password.slice(0, 3).split('').reverse().join('');

 let str = password.slice(3, 6);
 let thirdPart = '';

 for (let i = 0; i < str.length; i++) {
   let index = (alphabet.indexOf(str[i]) - 1 + 26) % 26;
   thirdPart += alphabet[index];
 }

 const message = firstPart + secondPart + thirdPart;

 return validPasscodes.includes(message) ? "Nice to meet you, fellow Agent!" : "BANG!";
}