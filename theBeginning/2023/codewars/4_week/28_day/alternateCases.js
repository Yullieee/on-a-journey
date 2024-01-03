/*

Define String.prototype.toAlternatingCase (or a similar function/method such as to_alternating_case/toAlternatingCase/ToAlternatingCase in your selected language; see the initial solution for details) such that each lowercase letter becomes uppercase and each uppercase letter becomes lowercase

*/

String.prototype.toAlternatingCase = function () {
  return this.split('').map(a => {
    if (a === a.toUpperCase()) {
      return a.toLowerCase();
    } else if (a === a.toLowerCase()) {
      return a.toUpperCase();
    }
    return a;
  }).join('');
};