function reverseWords(str) {
  let words = str.split(' ');
  let reversedWords = words.map(word => word.split('').reverse().join(''));
  let reversedSentence = reversedWords.join(' ');
  return reversedSentence;
}

console.log(reverseWords('This is a test'));