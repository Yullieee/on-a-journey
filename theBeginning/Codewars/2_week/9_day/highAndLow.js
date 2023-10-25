/*

In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

Examples
highAndLow("1 2 3 4 5");  // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"

*/

function highAndLow(numbers){
  let sorted_arr = numbers.split(' ').sort((a,b) => (a-b));
  return `${sorted_arr[sorted_arr.length-1]} ${sorted_arr[0]}`;
}

console.log(highAndLow('52 0 4 -4 -9 122'));