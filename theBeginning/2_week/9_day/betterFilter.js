function filter_list(l) {
  return l.filter(i => typeof i == "number")
 }

 /*

 function filter_list(l) {
  let result = [];
  for (let i = 0 ; i < l.length ; i++) {
    if (typeof l[i] === 'number') {
      result.push(l[i]);
    }
  }
  return result;
 }

 */

 console.log(filter_list([1,2,'a','b']));