/*

Write two functions that convert a roman numeral to and from an integer value. Multiple roman numeral values will be tested for each function.

Modern Roman numerals are written by expressing each digit separately starting with the left most digit and skipping any digit with a value of zero. In Roman numerals 1990 is rendered: 1000=M, 900=CM, 90=XC; resulting in MCMXC. 2008 is written as 2000=MM, 8=VIII; or MMVIII. 1666 uses each Roman symbol in descending order: MDCLXVI.

Input range : 1 <= n < 4000

In this kata 4 should be represented as IV, NOT as IIII (the "watchmaker's four").

*/

const roman = [
  { value: 1000, numeral: 'M' },
  { value: 900, numeral: 'CM' },
  { value: 500, numeral: 'D' },
  { value: 400, numeral: 'CD' },
  { value: 100, numeral: 'C' },
  { value: 90, numeral: 'XC' },
  { value: 50, numeral: 'L' },
  { value: 40, numeral: 'XL' },
  { value: 10, numeral: 'X' },
  { value: 9, numeral: 'IX' },
  { value: 5, numeral: 'V' },
  { value: 4, numeral: 'IV' },
  { value: 1, numeral: 'I' },
];

class RomanNumerals {
  static toRoman(num) {

    let result = '';
    
    for(const pair of roman) {
      while (num >= pair.value) {
        result += pair.numeral;
        num -= pair.value;
      }
    }
    return result;   
  }
    
  static fromRoman(str) {

    let result = 0;
    let i = 0;

    while (i < str.length) {

      let currentNum = str[i];
      let nextNum = str[i + 1];

      let currentPair = roman.find(pair => pair.numeral === currentNum);
      let nextPair = roman.find(pair => pair.numeral === nextNum);

      if (nextNum && nextPair.value > currentPair.value) {
        result += nextPair.value - currentPair.value;
        i += 2;
      } else {
        result += currentPair.value;
        i++;
      }
    }
  return result;
  }
}

/*

const map = { M:1000, CM:900, D:500, CD:400, C:100, XC:90, L:50, XL:40, X:10, IX:9, V:5, IV:4, I:1};

class RomanNumerals {
    static toRoman(num) {
        let str = '';
        for (var i in map) {
            while (num >= map[i]) {
                str += i;
              num -= map[i];
            }
        }
        return str;
    }
    
    static fromRoman(str) {
         return str.match(/CM|CD|XC|XL|IX|IV|\w/g).reduce((acc, el) => acc + map[el], 0);
    }
}

*/