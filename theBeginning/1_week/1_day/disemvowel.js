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