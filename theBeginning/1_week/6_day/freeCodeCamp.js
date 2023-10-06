const myConcat = (arr1, arr2) => arr1.concat(arr2);

console.log(myConcat([1, 2], [3, 4, 5]));

const increment = (number, value = 1) => number + value;

console.log(increment(5));

const sum = (...args) => {
    let total = 0;
    for (let i = 0; i < args.length; i++) {
      total += args[i];
    }
    return total;
  }

/* application :

const arr = [6, 89, 3, 45];
const maximus = Math.max(...arr);

instead of :

const maxium = Math.max(arr[0], arr[1], arr[2], arr[4]);
we can't put Math.max(arr) because Math.max() expects comma-seperated arguments. */

console.log(sum(2,3,4,5,6));

const arr = [6, 89, 3, 45];
console.log(...arr);
console.log([...arr]);

const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
  };
  
const { today, tomorrow } = HIGH_TEMPERATURES;
const { today: highToday, tomorrow: highTomorrow } = HIGH_TEMPERATURES;

//instead of

const today1 = HIGH_TEMPERATURES.today;
const tomorrow1 = HIGH_TEMPERATURES.tomorrow;

console.log(today1, tomorrow1, today, tomorrow);

function removeFirstTwo(list) {
    const [a, b, ...arr] = list;
    return arr;
  }
  
console.log(removeFirstTwo('235697896345'));

const stats = {
    max: 56.78,
    standard_deviation: 4.34,
    median: 34.54,
    mode: 23.87,
    min: -0.75,
    average: 35.85
  };
  
const half = ({max, min}) => (max + min) / 2.0; 

//instead of

const half_bis = (stats) => (stats.min + stats.max) / 2.0;

console.log(half(stats), half_bis(stats));

function loop_size(node) {
  let slow = node;
  let fast = node;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) {
      slow = node;
      let length = 1;
      fast = fast.next;
      while (slow !== fast) {
        length++;
        fast = fast.next;
      }
      return length;
    }
  }
  return 0;
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

const node1 = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);
const node4 = new Node(4);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node2; // creates a loop

const loopLength = loop_size(node1);
console.log(loopLength);






