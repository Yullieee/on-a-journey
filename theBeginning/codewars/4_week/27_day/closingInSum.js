/*

Create a function that returns the sum of the digits formed from the first and last digits, all the way to the center of the number.

Worked Example
2520 ➞ 72

# The first and last digits are 2 and 0.
# 2 and 0 form 20.
# The second digit is 5 and the second to last digit is 2.
# 5 and 2 form 52.

# 20 + 52 = 72

*/

function closingInSum(n) {
  const numStr = n.toString();
  let sum = 0;
  const length = numStr.length;
  
  for (let i = 0; i < Math.floor(length / 2); i++) {
    const firstDigit = parseInt(numStr[i]);
    const lastDigit = parseInt(numStr[length - 1 - i]);
    sum += firstDigit * 10 + lastDigit;
  }

  if (length % 2 !== 0) {
    sum += parseInt(numStr[Math.floor(length / 2)]);
  }

  return sum;
}