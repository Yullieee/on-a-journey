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