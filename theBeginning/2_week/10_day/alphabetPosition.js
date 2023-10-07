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