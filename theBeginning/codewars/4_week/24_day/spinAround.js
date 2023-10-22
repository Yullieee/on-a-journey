/*

Given a list of directions to spin, "left" or "right", return an integer of how many full 360° rotations were made. Note that each word in the array counts as a 90° rotation in that direction.

Worked Example
["right", "right", "right", "right", "left", "right"] ➞ 1
# You spun right 4 times (90 * 4 = 360)
# You spun left once (360 - 90 = 270)
# But you spun right once more to make a full rotation (270 + 90 = 360)

*/

function spinAround(turns) {
  let sum = 0;
  for (let i = 0 ; i < turns.length ; i++) {
    switch(turns[i]) {
        case "right":
          sum += 1/4;
          break;
        case "left":
          sum -= 1/4;
          break;
        default:
          undefined;
          break;
    }
  }
  return Math.abs(parseInt(sum % 360));
}

const spinAround = turns =>
  Math.abs(turns.reduce((acc, turn) => acc + (turn === 'right' || -1), 0)) >> 2;