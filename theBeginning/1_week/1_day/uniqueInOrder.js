var uniqueInOrder = function (iterable) {

  let result = [];

  for (let i = 0; i < iterable.length; i++) {
    
    if (i === 0 || iterable[i] !== iterable[i - 1]) {
      result.push(iterable[i]);
    }
  }
  return result
}

console.log(uniqueInOrder('AAbCCCCcdEFG'));

var uniqueInOrder_bestsolution=function(iterable){
  return [...iterable].filter((a, i) => a !== iterable[i-1])
}