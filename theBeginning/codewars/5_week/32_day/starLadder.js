/*

Using n as a parameter in the function pattern, where n>0, complete the codes to get the pattern (take the help of examples):

Note: There is no newline in the end (after the pattern ends)

*/

function pattern(n){
  if (n === 1) {
    return n;
  }
  let result = "1";
  for (let i = 2 ; i <=n ; i++) {
    result += "\n1" + '*'.repeat(i-1) + `${i}`;
  }
 return result;
}