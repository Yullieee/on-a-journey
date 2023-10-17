/*

Task
A little boy is studying arithmetics. He has just learned how to add two integers, written one below another, column by column. But he always forgets about the important part - carrying.

Given two integers, find the result which the little boy will get.

Example
For param1 = 456 and param2 = 1734, the output should be 1180

    456
   1734
+ ____
   1180
The little boy goes from right to left:

6 + 4 = 10 but the little boy forgets about 1 and just writes down 0 in the last column

5 + 3 = 8

4 + 7 = 11 but the little boy forgets about the leading 1 and just writes down 1 under 4 and 7.

There is no digit in the first number corresponding to the leading digit of the second one, so the little boy imagines that 0 is written before 456. Thus, he gets 0 + 1 = 1.

*/

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
  
  let result = '';
  
  
  while(a > 0 || b > 0){
    let num  = (a%10 + b%10) % 10;
    result = num + result;
    a = Math.floor(a/10);
    b = Math.floor(b/10);
  }
  return +result
}

//this a better way to solve it... T-T