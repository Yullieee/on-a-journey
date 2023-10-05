function solution(...args) {

    let sortedArgs = (args.sort((a, b) => a - b));
    
    for (let i = 0 ; i < sortedArgs.length ; i++) {
      let tempArr = sortedArgs.slice(i+1);
      if (tempArr.includes(sortedArgs[i])) {
        return true;
      }
    }
    return false;
  }