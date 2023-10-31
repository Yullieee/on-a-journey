// Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.

function sumDigits(number) {
  let positiveNumber = number > 0 ? number : -number;
  const arr = positiveNumber.toString().split('');
  let result = 0;
  for (let i = 0 ; i < arr.length ; i++) {
    result += parseInt(arr[i]);
  }
  return result;
}

const sumDigits = number => String(number).replace('-', '').split('').reduce((prev, curr) => prev + Number(curr), 0);