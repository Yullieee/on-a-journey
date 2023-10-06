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
