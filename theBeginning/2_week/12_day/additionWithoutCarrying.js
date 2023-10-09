function additionWithoutCarrying(a,b) {

  let arr_a = a.toString().split('').reverse(); 
  let arr_b = b.toString().split('').reverse(); 
  let result = [];

  for (let i = 0 ; i < Math.max(arr_a.length,arr_b.length) ; i++) {

    let temp_sum = parseInt(arr_a[i] || 0) + parseInt(arr_b[i] || 0); 

    //if arr_a and arr_b have diff lengths we have to make sure the last iteration is possible

    if (temp_sum >= 10) {

    //if it's >=10 then we substract 10 bcs 10 <= temp_sum < 20 as we only want to know the last digit

      temp_sum -= 10;
      result.push(temp_sum);

    } else {
      result.push(temp_sum);
    }
  }
  return parseInt(result.reverse().join(''));
}

console.log(additionWithoutCarrying(504,2801));

/*

our function would turn 504 and 2801 into two arrays ['4','0','5'] & ['1','0','8','2']
then in our loop it does temp_sum = 4 or 0 + 1 or 0 = 5 and push 5 into our result
note that if i = 4 we're out of bonds for the first array, that's why we added the OR opperator

*/

function additionWithoutCarrying(a,b) {
  //coding and coding..
  let result = '';
  
  
  while(a > 0 || b > 0){
    let num  = (a%10 + b%10) % 10;
    result = num + result;
    a = Math.floor(a/10);
    b = Math.floor(b/10);
  }
  return +result
}

//this a better way to solve it,,,