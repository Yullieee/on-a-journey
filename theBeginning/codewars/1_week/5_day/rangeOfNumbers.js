function rangeOfNumbers(startNum, endNum) {
    if (startNum > endNum) {
      return [];
    } else {
      console.log(startNum, endNum);
      const arr = (rangeOfNumbers(startNum+1, endNum));
      arr.unshift(startNum);
      return arr;
    }
}
 console.log(rangeOfNumbers(1,10));
