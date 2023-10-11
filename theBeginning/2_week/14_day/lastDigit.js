/*

Define a function that takes in two non-negative integers a and b and returns the last decimal digit of a^b

You may assume that the input will always be valid.

Examples
lastDigit("4", "1")            // returns 4
lastDigit("4", "2")            // returns 6
lastDigit("9", "7")            // returns 9    
lastDigit("10","10000000000")  // returns 0

*/

function pow(base, exponent, mod) {
  
  let result = 1n;
  base = base % mod;

  while (exponent > 0n) {
      if (exponent % 2n === 1n) {
          result = (result * base) % mod;
      }

      exponent = exponent / 2n;
      base = (base * base) % mod;
  }

  return result;
}

function lastDigit(a, b) {

  a = BigInt(a);
  b = BigInt(b);

  
  if (b === 0n) {
      return 1;
  }

  const result = pow(a, b, 10n);
  return Number(result);
}

/*

Theory: 1. You need only the last digit of the number a.
        2. You need only the remainder of the division by 4 of the number b (the exponent)
        3. To find the remainder of division by 4 of a huge number you need only it's last 2 digits
        4. Then you just do the math base ** remainder and you return the last digit

const lastDigit = (a, b) => {
  if (b == 0) return 1;
  if (a == 0) return 0;
  let base = a.slice(-1);
  let remainder = +b.slice(-2) % 4;
  if (remainder == 0) remainder = 4;
  return base ** remainder % 10;
};

that's a clever approach... copying it here to remind myself of it

*/