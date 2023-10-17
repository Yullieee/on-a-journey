function snail(array) {
  
  let arr1 = Array.from(array);
  let result = [];

  if (arr1.length === 1) {
    return arr1[0];
  }

  while (arr1.length !== 0) {
    let temp = [];

    if (arr1.length === 1) {
      result.push(arr1[0][0]);
      arr1.splice(0, 1);
    }

    for (let i = 0; i < arr1.length; i++) {
      if (i !== 0 && i !== arr1.length - 1) {
        result.push(arr1[i][arr1.length - 1]);
        temp.push(arr1[i][0]);
      } else {
        if (i === arr1.length - 1) {
          for (let j = arr1.length - 1; j >= 0; j--) {
            result.push(arr1[i][j]);
          }
          for (let i = temp.length - 1; i >= 0; i--) {
            result.push(temp[i]);
          }
        } else {
          for (let j = 0; j < arr1.length; j++) {
            result.push(arr1[i][j]);
          }
        }
      }
    }

    for (let i = 0; i < arr1.length; i++) {
      arr1[i].splice(arr1.length - 1, 1);
      arr1[i].splice(0, 1);
    }

    arr1.splice(0, 1);
    arr1.splice(arr1.length - 1, 1);
  }

  return result;
}


function snail_best(array) {
  let result = [];
  while (array.length) {
    result.push(...array.shift());
    array.map(row => result.push(row.pop()));
    array.reverse().map(row => row.reverse());
  }
  return result;
}

console.log(snail([1,2],[3,4]));