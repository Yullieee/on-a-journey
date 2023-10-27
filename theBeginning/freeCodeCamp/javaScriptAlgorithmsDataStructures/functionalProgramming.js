//Learn About Functional Programming



const prepareTea = () => 'greenTea';

const getTea = (numOfCups) => {
  const teaCups = [];

  for(let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }
  return teaCups;
};

const tea4TeamFCC = getTea(40);



//Understand Functional Programming Terminology



const prepareGreenTea = () => 'greenTea';
const prepareBlackTea = () => 'blackTea';

const getTea2 = (prepareTea, numOfCups) => {
  const teaCups = [];

  for(let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }
  return teaCups;
};

const tea4GreenTeamFCC = getTea2(prepareGreenTea,27);
const tea4BlackTeamFCC = getTea2(prepareBlackTea,13);

console.log(
  tea4GreenTeamFCC,
  tea4BlackTeamFCC
);



//Understand the Hazards of Using Imperative Code



// tabs is an array of titles of each site open within the window
const Window = function(tabs) {
  this.tabs = tabs; // We keep a record of the array inside the object
};

// When you join two windows into one window
Window.prototype.join = function(otherWindow) {
  this.tabs = this.tabs.concat(otherWindow.tabs);
  return this;
};

// When you open a new tab at the end
Window.prototype.tabOpen = function(tab) {
  this.tabs.push('new tab'); // Let's open a new tab for now
  return this;
};

// When you close a tab
Window.prototype.tabClose = function(index) {

  // Only change code below this line

  const tabsBeforeIndex = this.tabs.slice(0, index); // Get the tabs before the tab
  const tabsAfterIndex = this.tabs.slice(index+1); // Get the tabs after the tab

  this.tabs = tabsBeforeIndex.concat(tabsAfterIndex); // Join them together

  // Only change code above this line

  return this;
 };

// Let's create three browser windows
const workWindow = new Window(['GMail', 'Inbox', 'Work mail', 'Docs', 'freeCodeCamp']); // Your mailbox, drive, and other work sites
const socialWindow = new Window(['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium']); // Social sites
const videoWindow = new Window(['Netflix', 'YouTube', 'Vimeo', 'Vine']); // Entertainment sites

// Now perform the tab opening, closing, and other operations
const finalTabs = socialWindow
  .tabOpen() // Open a new tab for cat memes
  .join(videoWindow.tabClose(2)) // Close third tab in video window, and join
  .join(workWindow.tabClose(1).tabOpen());
console.log(finalTabs.tabs);



//Avoid Mutations and Side Effects Using Functional Programming



// The global variable
let fixedValue = 4;

function incrementer() {
  return fixedValue + 1;
}



//Pass Arguments to Avoid External Dependence in a Function



// The global variable
let fixedValue1 = 4;

function incrementer(a) {
  return a+1;
}



//Refactor Global Variables Out of Functions



// The global variable
const bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

function add(arr,bookName) {
  let newBookList = [...arr];
  newBookList.push(bookName);
  return newBookList;
}

function remove(arr,bookName) {
  let newBookList = [...arr];
  const book_index = newBookList.indexOf(bookName);
  if (book_index >= 0) {
    newBookList.splice(book_index, 1);
    return newBookList;
    }
}



//Use the map Method to Extract Data from an Array



const ratings = watchList.map(movie => ({
  title: movie["Title"],
  rating: movie["imdbRating"]
}));



//Implement map on a Prototype



Array.prototype.myMap = function(callback) {
  const newArray = [];
  for (let i = 0; i < this.length; i++) {
    newArray.push(callback(this[i], i, this));
  }
  return newArray;
};



//Use the filter Method to Extract Data from an Array



const filteredList = watchList.filter(movie => parseFloat(movie["imdbRating"])>= 8.0)
                              .map(movie => ({title: movie["Title"],rating: movie["imdbRating"]}));



//Implement the filter Method on a Prototype



Array.prototype.myFilter = function(callback) {
  const newArray = [];
  for (let i = 0 ; i < this.length ; i++) {
    if (callback(this[i], i, this)) {
      newArray.push(this[i]);
    }
  }
  return newArray;
};



//Return Part of an Array Using the slice Method



function sliceArray(anim, beginSlice, endSlice) {
  return(anim.slice(beginSlice, endSlice));
}

const inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
sliceArray(inputAnim, 1, 3);



//Remove Elements from an Array Using slice Instead of splice



function nonMutatingSplice(cities) {

  return cities.slice(0,3);
}



//Combine Two Arrays Using the concat Method



function nonMutatingConcat(original, attach) {
  return original.concat(attach);
}

const first = [1, 2, 3];
const second = [4, 5];
nonMutatingConcat(first, second);



//Add Elements to the End of an Array Using concat Instead of push



function nonMutatingPush(original, newItem) {
  return original.concat(newItem);
}

nonMutatingPush(first, second);



//Use the reduce Method to Analyze Data



function getRating(watchList) {
  let movies = watchList.filter(movie => movie["Director"] === "Christopher Nolan");
  let ratings = movies.map(movie => movie["imdbRating"]);
  let averageRating = ratings.reduce((a,b) => parseFloat(a) + parseFloat(b), 0)/ratings.length;
  return averageRating;
}



//Use Higher-Order Functions map, filter, or reduce to Solve a Complex Problem



const squareList = arr => {
  return arr.filter(a => a>0).filter(a => a === Math.floor(a,0)).map(a => Math.pow(a,2));
};

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);



//Sort an Array Alphabetically using the sort Method



function alphabeticalOrder(arr) {
  return arr.sort(function(a, b) {
    return a === b ? 0 : a < b ? -1 : 1;
  });
}
alphabeticalOrder(["a", "d", "c", "a", "z", "g"]);



//Return a Sorted Array Without Changing the Original Array



const globalArray = [5, 6, 3, 2, 9];

function nonMutatingSort(arr) {
  let newArr = Array.from(arr);
  return newArr.sort(function(a,b) {
    return a === b ? 0 : a < b ? -1 : 1;
  })
}

nonMutatingSort(globalArray);



//Split a String into an Array Using the split Method



function splitify(str) {
  return(str.split(/\W/g));
}

splitify("Hello World,I-am code");



//Combine an Array into a String Using the join Method



function sentensify(str) {
  const arr = str.split(/\W/);
  return arr.join(' ');
}

sentensify("May-the-force-be-with-you");



//Apply Functional Programming to Convert Strings to URL Slugs



function urlSlug(title) {
  let arr = title.toLowerCase().trim().split(/\W+/g);
  let str = arr.join('-');
  console.log(str)
  return str;
}

urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone");



//Use the every Method to Check that Every Element in an Array Meets a Criteria



function checkPositive(arr) {
  return arr.every(a => a>0);
}

checkPositive([1, 2, 3, -4, 5]);



//Use the some Method to Check that Any Elements in an Array Meet a Criteria



function checkPositive(arr) {
  return (arr.some(a => a>0));
}

checkPositive([1, 2, 3, -4, 5]);



//Introduction to Currying and Partial Application



function add(x) {
  return function(y) {
    return function(z) {
      return x + y + z;
    }
  }
}

const adding = x => y => z => x + y + z;

add(10)(20)(30);
adding(10)(20)(30);