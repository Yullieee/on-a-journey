// Write a function which calculates the average of the numbers in a given list.

function findAverage(array) {
  return array.length ? array.reduce((total, num) => total + num, 0)/array.length : 0;
}

