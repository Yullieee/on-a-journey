/*

Trolls are attacking your comment section!

A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

Your task is to write a function that takes a string and return a new string with all vowels removed.

For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

Note: for this kata y isn't considered a vowel.

*/

function disemvowel(str) {

  let vowels = ['a','e','u','i','o','A','E','U','I','O'];
  let new_str = new Array(str.length);

  for (let i = 0 ; i < str.length ; i++) {

    if (!vowels.includes(str[i])) {
      new_str[i] = str[i];
    }
  } 
  return new_str.join('');
}

const arr = 'why is it not working ?';
console.log(disemvowel(arr));

function disemvowel_bestsolution(str) {
  return str.replace(/[aeiou]/gi, '');
}