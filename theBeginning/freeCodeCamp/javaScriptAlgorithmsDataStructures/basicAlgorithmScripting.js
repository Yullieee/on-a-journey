//Convert Celsius to Fahrenheit

function convertCtoF(celsius) {
  let fahrenheit = celsius * 9/5 + 32;
  return fahrenheit;
}

convertCtoF(30);

//Reverse a String

function reverseString(str) {
  let newStr = '';
  for (let i = str.length - 1 ; i >= 0 ; i--) {
    newStr += str[i];
  }
  return newStr;
}

reverseString("hello");

//Factorialize a Number

function factorialize(num) {
  if (num <= 0) {
    return 1;
  }
  return num * factorialize(num - 1);
}

//Find the Longest Word in a String

function findLongestWordLength(s) {
  return s
    .split(' ')
    .reduce((longest, word) => Math.max(longest, word.length), 0);
}

//Return Largest Numbers in Arrays

function largestOfFour(arr) {
  return arr.map(Function.apply.bind(Math.max, null));
}
//https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-return-largest-numbers-in-arrays/16042 for the explanation

//Confirm the Ending

function confirmEnding(str, target) {
  let re = new RegExp(target + "$", "i");
  return re.test(str);
}

//Repeat a String Repeat a String

function repeatStringNumTimes(str, num) {
  return num > 0 ? str + repeatStringNumTimes(str, num - 1) : '';
}

//Truncate a String

function truncateString(str, num) {
  return str.length > num ? str.slice(0, num) + "..." : str;
}

//Finders Keepers

function findElement(arr, func) {
  for (let i = 0 ; i < arr.length ; i++) {
    if (func(arr[i])) {
      return arr[i];
    }
  }
  return undefined;
}

findElement([1, 2, 3, 4], num => num % 2 === 0);

//Boo who

function booWho(bool) {
  return typeof bool === 'boolean';
}

booWho(null);

//Title Case a Sentence

function titleCase(str) {
  return str.toLowerCase().replace(/(^|\s)\S/g, a => a.toUpperCase());
}

//Slice and Splice

function frankenSplice(arr1, arr2, n) {
  let newArr = arr2.slice();
  newArr.splice(n, 0, ...arr1);
  return newArr;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);

//Falsy Bouncer

function bouncer(arr) {
  arr = arr.map(a => a ? a : null).filter(a => a !== null);
  return arr;
}

bouncer([7, "ate", "", false, 9]);

//Where do I Belong

function getIndexToIns(arr, num) {
  return arr.filter(a => num > a).length;
}

getIndexToIns([40, 60], 50);

//Mutations

function mutation([elem1, elem2]) {
  const regex = new RegExp(`[^${elem1}]`, 'i');
  return !regex.test(elem2);
}

mutation(["hello", "hey"]);

//Chunky Monkey

function chunkArrayInGroups(arr, size) {
  const newArr = [];
  while (arr.length > 0) {
    newArr.push(arr.splice(0, size));
  }
  return newArr;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);