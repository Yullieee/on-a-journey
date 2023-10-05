function findShort(s) {

  let words = s.split(' ');
  let min = words[0].length

  for (let i = 0; i < words.length; i++) {

    if (min > words[i].length) {
        min = words[i].length;
    }
  }
  return min
}

const s = 'my name is yullie!!';
console.log(findShort(s));