function highAndLow(numbers){
  let sorted_arr = numbers.split(' ').sort((a,b) => (a-b));
  return `${sorted_arr[sorted_arr.length-1]} ${sorted_arr[0]}`;
}

console.log(highAndLow('52 0 4 -4 -9 122'));