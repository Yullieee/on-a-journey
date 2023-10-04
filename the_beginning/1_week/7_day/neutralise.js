function neutralise(s1, s2) {
    let result = "";
    for (let i = 0 ; i < s2.length ; i++) {
      if (s1[i] !== s2[i]) {
        result += "0";
      } else {
        result += s1[i];
      }
    }
    return result;
  }