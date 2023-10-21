//Sum All Numbers in a Range

function sumAll(arr) {
  let max = Math.max(arr[0], arr[1]);
  let min = Math.min(arr[0], arr[1]);
  let sum = 0;
  for (let i = min; i <= max; i++) {
    sum += i;
  }
  return sum;
}
sumAll([1, 4]);

//Diff Two Arrays

function diffArray(arr1, arr2) {
  const uniqueArr1 = arr1.filter(a => !arr2.includes(a));
  const uniqueArr2 = arr2.filter(a => !arr1.includes(a));
  const conc = uniqueArr1.concat(uniqueArr2);
  return conc;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

//Seek and Destroy

function destroyer(arr,...args) {
  let newArr = [...args];
  return arr.filter(a => !newArr.includes(a));
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);

//Wherefore art thou

function whatIsInAName(collection, source) {
  const sourceKeys = Object.keys(source);
  return collection.filter(obj => {
    for (let i = 0; i < sourceKeys.length; i++) {
      if (obj[sourceKeys[i]] !== source[sourceKeys[i]]) {
        return false;
      }
    }
    return true;
  });
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });

//Spinal Tap Case

function spinalCase(str) {
  return str.replace(/[\W_]/g, ' ')
            .replace(/([a-z])([A-Z])/g,'$1 $2')
            .toLowerCase()
            .replace(/\s/g, '-');
}

spinalCase('This Is Spinal Tap');
spinalCase("thisIsSpinalTap");
spinalCase("The_Andy_Griffith_Show");
spinalCase("Teletubbies say Eh-oh");
spinalCase("AllThe-small Things");

//Pig Latin

function translatePigLatin(str){
  let vowels = /[aeoui]/;
  let consonants = str.match(/(^[^aeoui]+)/);
  return vowels.test(str[0]) ? str + 'way' : str.slice(consonants[0].length) + consonants[0] + 'ay';
}

console.log(translatePigLatin("consonant"));
console.log(translatePigLatin("glove"));
console.log(translatePigLatin("algorithm"));
console.log(translatePigLatin("schwartz"));

//Search and Replace

function myReplace(str, before, after) {
  let maj = /^[A-Z]/;
  let min = /^[a-z]/;
  let nAfter = after;
  if (maj.test(before)) {
    if (!maj.test(after)) {
      nAfter = after.replace(min, (lower) => lower.toUpperCase());
    }
  } else {
    if (!min.test(after)) {
      nAfter = after.replace(maj, (upper) => upper.toLowerCase());
    }
  }
  return str.replace(before,nAfter);
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
myReplace("He is Sleeping on the couch", "Sleeping", "sitting");
myReplace("I think we should look up there", "up", "Down")

//DNA Pairing

function pairElement(str) {
  let arr = str.split('').map(a => [a,'']);
  for (let i = 0 ; i < arr.length ; i++) {
    if (arr[i][0] === 'A') {
      arr[i][1] = 'T';
    } else if (arr[i][0] === 'T') {
      arr[i][1] = 'A';
    } else if (arr[i][0] === 'G') {
      arr[i][1] = 'C';
    } else if (arr[i][0] === 'C') {
      arr[i][1] = 'G';
    }
  }
  return arr;
}

pairElement("GCG");
pairElement("ATCGA")

function pairElement(str) {
  const pairs = {
    A: "T",
    T: "A",
    C: "G",
    G: "C"
  };
  return str
    .split("")
    .map(x => [x, pairs[x]]);
}

//Missing letters

function fearNotLetter(array) {
  let first = array[0].charCodeAt(0)
  for (let i = 1; i < array.length; i++) {
    if (first + i !== array[i].charCodeAt(0)) {
      return String.fromCharCode(first + i)
    }
  }
  return undefined;
}

fearNotLetter("abce");

//Sorted Union

function uniteUnique(arr, ...args) {
  let arr2 = arr.filter((value, i, self) => self.indexOf(value) === i);
  for (let i = 0; i < args.length; i++) {
    arr2 = arr2.concat(args[i].filter(a => !arr2.includes(a)));
  }
  return arr2;
}

uniteUnique([1, 3, 2, 3], [5, 2, 1, 4], [2, 1]);

//Convert HTML Entities

function convertHTML(str) {

  return str.replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/'/g, '&apos;')
            .replace(/(")/g, '&quot;')
}

function convertHTML(str) {
  const htmlEntities = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&apos;"
  };
  return str.replace(/([&<>\"'])/g, match => htmlEntities[match]);
}

//Sum All Odd Fibonacci Numbers

function sumFibs(num) {
  let prev = 0;
  let current = 1;
  let sum = 0;
  while (current <= num) {
    if (current % 2 === 1) {
      sum += current;
    }
    const next = prev + current;
    prev = current;
    current = next;
  }
  return sum;
}

//Sum All Primes

function sumPrimes(num) {

  function isPrime(num) {
    if (num % 2 === 0 && num !== 2 ) { return false }
    if (num <= 1) { return false }
    if (num === 2) { return true }
    let limit = Math.sqrt(num)+1;
    for (let k = 3 ; k <= limit ; k+=2) {
      if (num % k === 0) { return false }
    }
    return true;
  }

  if (num === 1) { return 0 }
  if (num === 2) { return 2 }

  let current = 3;
  let sum = 2;

  while (current <= num) {
    if (isPrime(current)) {
      sum += current;
    }
    current += 2;
  }
  return sum;
}

//Smallest Common Multiple

function smallestCommons(arr) {

  arr.sort(function(a, b) {
    return a - b;
  });

  let range = [];
  for (let i = arr[0]; i <= arr[1]; i++) {
    range.push(i);
  }

  function findPPCM(a, b) {
    return (a * b) / findPGCD(a, b);
  }

  function findPGCD(a, b) {
    while (b !== 0) {
      let temp = b;
      b = a % b;
      a = temp;
    }
    return a;
  }

  let ppcm = range.reduce(function(a, b) {
    return findPPCM(a, b);
  });

  return ppcm;
}

function smallestCommons(arr) {
  // Setup
  const [min, max] = arr.sort((a, b) => a - b);
  const range = Array(max - min + 1)
    .fill(0)
    .map((_, i) => i + min);
  // GCD of two numbers
  // https://en.wikipedia.org/wiki/Greatest_common_divisor#Euclid's_algorithm
  const gcd = (a, b) => (b === 0) ? a : gcd(b, a % b);
  // LCM of two numbers
  // https://en.wikipedia.org/wiki/Least_common_multiple#Using_the_greatest_common_divisor
  const lcm = (a, b) => a * b / gcd(a, b);
  // LCM of multiple numbers
  // https://en.wikipedia.org/wiki/Least_common_multiple#Other
  return range.reduce((multiple, curr) => lcm(multiple, curr));
}

//Drop it

function dropElements(arr, func) {
  while (arr.length > 0 && !func(arr[0])) {
    arr.shift();
  }
  return arr;
}

dropElements([1, 2, 3], function(n) {return n < 3; });

//Steamroller

function steamrollArray(arr) {
  let flattened = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      flattened = flattened.concat(steamrollArray(arr[i]));
    } else {
      flattened.push(arr[i]);
    }
  }
  return flattened;
}

steamrollArray([1, [2], [3, [[4]]]]);

function steamrollArray(val,flatArr=[]) {
  val.forEach(item => {
    if (Array.isArray(item)) steamrollArray(item, flatArr);
    else flatArr.push(item);
  });
  return flatArr;
}

//Binary Agents

function binaryAgent(str) {
  return str.split(' ').map(binary => String.fromCharCode(parseInt(binary, 2))).join('');
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");

//Everything Be True

function truthCheck(collection, pre) {
  let counter = 0;
  for (let c in collection) {
    if (collection[c].hasOwnProperty(pre) && Boolean(collection[c][pre])) {
      counter++;
    }
  }
  return counter == collection.length;
}

truthCheck([{name: "Quincy", role: "Founder", isBot: false}, {name: "Naomi", role: "", isBot: false}, {name: "Camperbot", role: "Bot", isBot: true}], "isBot");

//Arguments Optional

function addTogether() {
  const [a, b] = arguments;
  if (typeof (a) === "number") {
    if (typeof (b) === "number") {
      return a + b;
    }
    if (arguments.length === 1) {
      return (b) => addTogether(a, b);
    }
  }
}


addTogether(2,3);

//Make a Person

const Person = function(first, last) {
  let firstName = first;
  let lastName  = last;

  this.getFirstName = function() {
    return firstName;
  };

  this.getLastName = function() {
    return lastName;
  };

  this.getFullName = function() {
    return this.getFirstName() + " " + this.getLastName();
  };

  this.setFirstName = function(first) {
    return firstName = first;
  };

  this.setLastName = function(last) {
    return lastName = last;
  };

  this.setFullName = function(first, last) {
    this.setFirstName(first);
    this.setLastName(last);
    return this.getFullName();
  };
}

//Map the Debris

function orbitalPeriod(arr) {
  const GM = 398600.4418;
  const earthRadius = 6367.4447;
  const a = 2 * Math.PI;
  const newArr = [];
  const getOrbPeriod = function(obj) {
    const b = Math.sqrt(c / GM);
    const c = Math.pow(earthRadius + obj.avgAlt, 3);
    const orbPeriod = Math.round(a * b);
    return {name: obj.name, orbitalPeriod: orbPeriod};
  };
  for (let elem in arr) {
    newArr.push(getOrbPeriod(arr[elem]));
  }
  return newArr;
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);