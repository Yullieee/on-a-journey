/*

Write a method (or function, depending on the language) that converts a string to camelCase, that is, all words must have their first letter capitalized and spaces must be removed.

*/

String.prototype.camelCase = function() {
  return this.replace(/(?:^|\s)(\w)/g, (match, c) => c.toUpperCase());
};