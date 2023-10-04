function trouble(x, t) {
    for (let i = 0; i < x.length - 1; i++) {
      if (x[i] + x[i + 1] === t) {
        x.splice(i + 1, 1);
        i--;                                        //don't forget to decrease the number of iteration if you take an element out of the array
      }
    }
    return x;
  }
  