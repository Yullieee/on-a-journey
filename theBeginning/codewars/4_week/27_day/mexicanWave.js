/*

Task
In this simple Kata your task is to create a function that turns a string into a Mexican Wave. You will be passed a string and you must return that string in an array where an uppercase letter is a person standing up. 

Rules
1. The input string will always be lower case but maybe empty.

2. If the character in the string is whitespace then pass over it as if it was an empty seat

*/

function wave(str) {
  return Array.from({ length: str.length }, (_, index) => {
    if (str[index] !== ' ') {
      return str.slice(0, index) + str[index].toUpperCase() + str.slice(index + 1);
    } else {
      return null
    }
  }).filter(Boolean);
}
