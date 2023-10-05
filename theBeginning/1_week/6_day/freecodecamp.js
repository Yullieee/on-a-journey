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


