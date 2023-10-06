function freedPrisoners(prison){
    let result = 0;
    if (prison[0] === false) { 
      return 0;
    } else {
        for (let i = 0 ; i < prison.length ; i++) {
          if (prison[i] === true) {
            result++;
            for (let j = i ; j < prison.length ; j++) {
              prison[j]= !prison[j];
            }
          }
        }
      }
    return result;
  }