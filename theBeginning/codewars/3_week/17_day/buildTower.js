/*

Build Tower
Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.

For example, a tower with 3 floors looks like this:

[
  "  *  ",
  " *** ", 
  "*****"
]

*/

function towerBuilder(nFloors) {
  let tower = [];
  for (let i = 0; i < nFloors; i++) {
    let spacesLeft = ' '.repeat(nFloors - i - 1);
    let floor = '*'.repeat(i * 2 + 1);
    let spacesRight = ' '.repeat(nFloors - i - 1);
    let level = spacesLeft + floor + spacesRight;
    tower.push(level);
  }
  return tower;
}