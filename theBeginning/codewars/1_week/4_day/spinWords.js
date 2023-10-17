/*

Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

Examples:

spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" 
spinWords( "This is a test") => returns "This is a test" 
spinWords( "This is another test" )=> returns "This is rehtona test"

*/

function spinWords(string){

  let arr = string.split(' ');
  let result = [];

  for (let i = 0 ; i < arr.length ; i++) {

    if (arr[i].length >= 5) {

      let word = '';

      for (let j = arr[i].length - 1 ; j >= 0 ; j--) {
        word = word + arr[i][j];
      }

      result.push(word);

    } else {
      result.push(arr[i]);
    }

  }
  return result.join(' ');
}

const s = 'my name is not yullie';
console.log(spinWords(s));
