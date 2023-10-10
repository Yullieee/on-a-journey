// Only change code below this line
class Vegetable {
  constructor(name) {
    this.name = name;
  }
}
// Only change code above this line

const carrot = new Vegetable('carrot');
console.log(carrot.name); // Should display 'carrot'

// Only change code below this line
class Thermostat {
  constructor(t) {
    this._t = t;
  }
  get temperature() {
    return (5/9) * (this._t - 32);
  }
  set temperature(celsius) {
    return this._t = (celsius * 9/5) + 32;
  }
}
// Only change code above this line

const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius


<html>
  <body>
  <script type="module" src="index.js"></script>  
  </body> 
</html>

// A script that uses this module type can now use the import and export features you will learn about in the upcoming challenges.

const lowercaseString = (string) => {
  return string.toLowerCase();
}

export const uppercaseString = (string) => {
  return string.toUpperCase();
}

export { lowercaseString };

import { uppercaseString, lowercaseString } from './string_functions.js';  
import * as stringFunctions from "./string_functions.js";
// Only change code above this line

uppercaseString("hello");

lowercaseString("WORLD!");

import subtract from "./math_functions.js";  //with the default export function

// const makeServerRequest = new Promise((resolve,reject) => {});

/*A promise in JavaScript is exactly what it sounds like - you use it to make a promise to do something, usually asynchronously.
When the task completes, you either fulfill your promise or fail to do so. 
Promise is a constructor function, so you need to use the new keyword to create one. 
It takes a function, as its argument, with two parameters - resolve and reject. 
These are methods used to determine the outcome of the promise. 

The syntax looks like this:
const myPromise = new Promise((resolve, reject) => {

});*/

const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer represents a response from a server
  let responseFromServer;
    
  if(responseFromServer) {
    resolve("We got the data");
  } else {  
    reject("Data not received");
  }
});

/*A promise has three states: pending, fulfilled, and rejected. The promise you created in the last challenge is forever stuck in the pending state because you did not add a way to complete the promise. The resolve and reject parameters given to the promise argument are used to do this. resolve is used when you want your promise to succeed, and reject is used when you want it to fail. These are methods that take an argument, as seen below.

const myPromise = new Promise((resolve, reject) => {
  if(condition here) {
    resolve("Promise was fulfilled");
  } else {
    reject("Promise was rejected");
  }
});

The example above uses strings for the argument of these functions, but it can really be anything.*/



