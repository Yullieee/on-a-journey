/*

A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward as forward. Examples of numerical palindromes are:

2332
110011
54322345

For a given number num, return its closest numerical palindrome which can either be smaller or larger than num. If there are 2 possible values, the larger value should be returned. If num is a numerical palindrome itself, return it.

For this kata, single digit numbers will NOT be considered numerical palindromes.

Also, you know the drill - be sure to return "Not valid" if the input is not an integer or is less than 0.

palindrome(8) => 11
palindrome(281) => 282 
palindrome(1029) => 1001
palindrome(1221) => 1221
palindrome("1221") => "Not valid"

*/

function isPalindrome(n) {
  let arr = n.toString().split('');
  let reversedArr = arr.slice().reverse();
  return arr.join('') === reversedArr.join('') && arr.length > 1;
}

function palindrome(num) {
  
  if (typeof num !== 'number' || num < 0) {
    return 'Not valid';
  }

  if (isPalindrome(num)) {
    return num;
  }

  for (let i = num, j = num; i > 0 && j > 0; i--, j++) {
    if (isPalindrome(i)) {
      return i;
    }
    if (isPalindrome(j)) {
      return j;
    }
  }

  return 'Not valid';
}
