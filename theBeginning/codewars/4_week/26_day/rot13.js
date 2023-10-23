/*

ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".

*/

function rot13(message){

  let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  let encrypted = [];
  
  for (let i = 0 ; i < message.length ; i++) {
    if (alphabet.includes(message[i].toLowerCase())) {
      let index = (alphabet.indexOf(message[i].toLowerCase())-13)%26;
      if (index < 0) {
        index += 26;
      }
      let encryptedLetter = message[i] === message[i].toUpperCase() ? alphabet[index].toUpperCase() : alphabet[index];
      encrypted.push(encryptedLetter);
    } else {
      encrypted.push(message[i]);
    }
  }
  return encrypted.join('');
}