/*

Complete the solution so that the function will break up camel casing, using a space between words.

Example
"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  ""

*/

function solution(string) {
  let regEx = /([a-z]*)([A-Z]){1}([a-z]*)/g;
  return string.replace(regEx,'$1 $2$3')  
}