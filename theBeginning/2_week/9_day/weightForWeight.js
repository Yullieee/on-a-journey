function sumDigits(n) {
  
  const arr = n.toString().split('');
  return arr.reduce((a, b) => parseInt(a) + parseInt(b), 0);
  
}

function orderWeight(strng) {
  
  const arr = strng.split(' ');
  const sumArr = [];

  for (let i = 0; i < arr.length; i++) {
    sumArr.push([sumDigits(arr[i]), arr[i]]);
  }

  sumArr.sort((a, b) => {
    if (a[0] !== b[0]) {
      return a[0] - b[0];
    } else {
      return a[1].localeCompare(b[1]);
    }
  });

  const result = [];
  for (let i = 0; i < sumArr.length; i++) {
    result.push(sumArr[i][1]);
  }

  return result.join(' ');
}


console.log(orderWeight('2000 14 698 65 655 2 6 08 9 654 8'));