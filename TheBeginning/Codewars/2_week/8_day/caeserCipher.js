/*

Caesar Ciphers are one of the most basic forms of encryption. It consists of a message and a key, and it shifts the letters of the message for the value of the key.

Read more about it here: https://en.wikipedia.org/wiki/Caesar_cipher

Your task
Your task is to create a function encryptor that takes 2 arguments - key and message - and returns the encrypted message.

Make sure to only shift letters, and be sure to keep the cases of the letters the same. All punctuation, numbers, spaces, and so on should remain the same.

Also be aware of keys greater than 26 and less than -26. There's only 26 letters in the alphabet!

Examples
A message 'Caesar Cipher' and a key of 1 returns 'Dbftbs Djqifs'.

A message 'Caesar Cipher' and a key of -1 returns 'Bzdrzq Bhogdq'.

*/

function encryptor(key, message) {
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  let encrypted = [];

  for (let i = 0; i < message.length; i++) {
    if (alphabet.includes(message[i].toLowerCase())) {
      let index = (alphabet.indexOf(message[i].toLowerCase())+key)%26;
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