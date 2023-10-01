function descendingOrder(n) {

  let str = n.toString();
  let arr = str.split('');
  
  for (let k = 0; k < arr.length; k++) {              //k goes from 0 to arr.length

    for (let j = 0; j < arr.length - 1 - k; j++) {    //j goes from 0 to the second last element minus k because we already swaped numbers

      if (arr[j] < arr[j + 1]) {

        let temp = arr[j];                            //as the name suggest it is a temporary variable we use to hold the number in arr[j]
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;

      }
    }
  }
  return parseInt(arr.join(''));                      //we put the string back into a number
}

const n = 4129;
console.log(descendingOrder(n));

function descendingOrder_bestsolution(n){
    return parseInt(String(n).split('').sort().reverse().join(''))
}