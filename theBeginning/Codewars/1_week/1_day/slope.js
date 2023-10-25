/*

Given an array of 4 integers
[a,b,c,d] representing two points (a, b) and (c, d), return a string representation of the slope of the line joining these two points.

For an undefined slope (division by 0), return undefined . Note that the "undefined" is case-sensitive.

*/

function slope(points) {

    if (points[2]-points[0] === 0) { 
        return 'undefined' 
    }
    return ((points[3] - points[1])/(points[2] - points[0])).toString();
}

console.log(slope([4,2,7,6]));

function slope_bestsolution([ x1, y1, x2, y2 ]) {
    let slope = (y2 - y1) / (x2 - x1);
    return Number.isFinite(slope) ? `${slope}` : 'undefined';
  }