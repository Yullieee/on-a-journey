function flickSwitch(arr){
    let result = [];
    let bool = true;
    for (let i = 0 ; i < arr.length ; i++) {
      if (arr[i] === 'flick') {
        switch (bool) {
            case true:
              bool = false;
              break;
            case false:
              bool = true;
            break;
        }
      }
      result.push(bool);
    }
    return result;
  }